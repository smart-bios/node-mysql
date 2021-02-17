import {Request, Response} from 'express'

export const getUser = (req: Request, res: Response) => {

    const {id} = req.params;

    res.json({
        msg: 'getUser',
        id
    })
}

export const listUsers = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'listUsers',
        id
    })
}

export const addUser = (req: Request, res: Response) => {

    const {body} = req;

    res.json({
        msg: 'addUser',
        body
    })
}

export const editUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'editUser',
        body
    })
}

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    })
}