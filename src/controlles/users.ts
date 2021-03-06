import {Request, Response} from 'express'
import bcrypt from 'bcrypt';
import User from '../models/user';

export const getUser = async(req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const user = await User.findByPk(id, {
            attributes: ["id",'username', 'email']
        })

        res.json({
            status: 'success',
            msg: 'search user',
            result: user
            
        })
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const listUsers = async(req: Request, res: Response) => {

    try {
        const users = await User.findAll({
            attributes: ["id",'username', 'email']
        });

        res.json({
            status: 'success',
            msg: 'List users',
            result: users
        });

    } catch (error) {

        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const addUser = async( req: Request, res: Response ) => {

    try {
        let { username,  email,  password } = req.body

        const emailExist = await User.findOne({where: {email}});

        if(emailExist){
            return res.status(400).json({
                status: 'warning',
                msg: `El email ya esta registrado: ${email}`
            })
        }
        
        password = await bcrypt.hash(password, 10);
        const user = await User.create({username, email, password})        

        res.json({
            status: 'success',
            msg: 'add user',
            result: user
        })

        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const editUser = async( req: Request, res: Response ) => {

    try {
        const { id } = req.params;
        const { body } = req;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({
                status: 'warning',
                msg: `No existe el registro para actualizar`
            })
        }

        await User.update( body, {where: {id}} );

        res.json({
            status: 'success',
            msg: 'update user',
            result: `data id ${id} updated`
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const deleteUser = async( req: Request, res: Response ) => {

    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({
                status: 'warning',
                msg: `No existe el registro para Eliminar`
            })
        }

        await User.update( {status:false}, {where: {id}} );

        res.json({
            status: 'success',
            msg: 'delete user',
            result: `data id ${id} deleted`
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}
