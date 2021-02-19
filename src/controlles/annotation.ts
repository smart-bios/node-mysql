import { Request, Response } from 'express';
import  { Op } from 'sequelize'
import Annotation from '../models/annotation';

export const addAnnotation = async( req: Request, res: Response ) => {
    try {
        const { body } = req
        const annotation = await Annotation.create(body)

        res.json({
            status: 'success',
            msg: 'add annotation',
            result: annotation
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'ERROR SERVDIOR',
            result: error
        })
    }
}

export const searchById = async( req: Request, res: Response ) => {
    try {
        const { id } = req.params;

        const gene = await Annotation.findAll({
            where: {
                [Op.or]: [
                    { loci_ncbi: id },
                    { gene_ncbi: id },
                    { protein_ncbi: id },
                    { other_id: id }
                ]
            }
        })

        if(gene){
            res.json({
                status: 'success',
                msg: 'Busqueda exitosa',
                result: gene
            })
        }else{
            res.json({
                status: 'warning',
                msg: 'No se escontraron resultados',
                result: gene
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'ERROR SERVDIOR',
            result: error
        })
    }
}

export const searchByAnnotation = async( req: Request, res: Response ) => {
    try {
        const { code } = req.params;

        const gene = await Annotation.findAll({
            where: {
                [Op.or]: [
                    {
                        gene_ontology: {
                            [Op.like]: `%${code}`
                        }
                    },
                    {
                        kegg_ko: {
                            [Op.like]: `%${code}`
                        }
                    },
                    {
                        kegg_pathway: {
                            [Op.like]: `%${code}`
                        }
                    }
                ]
            }
        })

        if(gene){
            res.json({
                status: 'success',
                msg: 'Busqueda exitosa',
                result: gene
            })
        }else{
            res.json({
                status: 'warning',
                msg: 'No se escontraron resultados',
                result: gene
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'ERROR SERVDIOR',
            result: error
        })
    }
}