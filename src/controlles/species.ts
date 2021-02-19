import {Request, Response} from 'express'
import Specie from '../models/specie';

export const getSpecie = async(req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const specie = await Specie.findByPk(id)

        res.json({
            status: 'success',
            msg: 'search specie',
            result: specie
            
        })
        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const listSpecies = async(req: Request, res: Response) => {

    try {
        const species = await Specie.findAll();

        res.json({
            status: 'success',
            msg: 'List species',
            result: species
        });

    } catch (error) {

        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const addSpecie = async( req: Request, res: Response ) => {

    try {
        let { scientific_name } = req.body

        const specieExist = await Specie.findOne({where: {scientific_name}});

        if(specieExist){
            return res.status(400).json({
                status: 'warning',
                msg: `La especie ${scientific_name} ya esta registrada`
            })
        }
        
        const specie = await Specie.create(req.body)        

        res.json({
            status: 'success',
            msg: 'add user',
            result: specie
        })

        
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'No se a podido registrar el usuario',
            result: error
        });
    }
}

export const editSpecie = async( req: Request, res: Response ) => {

    try {
        const { id } = req.params;
        const { body } = req;

        const specie = await Specie.findByPk(id);

        if(!specie){
            return res.status(400).json({
                status: 'warning',
                msg: `No existe el registro para actualizar`
            })
        }

        await Specie.update( body, {where: {id}} );

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

export const deleteSpecie = async( req: Request, res: Response ) => {

    try {
        const { id } = req.params;

        const specie = await Specie.findByPk(id);

        if(!specie){
            return res.status(400).json({
                status: 'warning',
                msg: `No existe el registro para Eliminar`
            })
        }

        await Specie.destroy({where: { id } })

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
