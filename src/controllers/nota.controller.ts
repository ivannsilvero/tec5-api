/**
 * CONTROLADOR
 * DOMINIO/api/nota
 */

import { Request, Response } from 'express';
import { Notas } from '../entity/Notas';
import { getRepository } from 'typeorm';

export const getNotas = async (_: Request, res: Response):Promise<Response> => {

    const notas = await getRepository(Notas).find();

    return res.status(201).json({
        ok: true,
        notas
    });


}

export const getNota = async (req: Request, res: Response):Promise<Response> => {

    try {
     
        const nota = await getRepository(Notas).findOne( req.params.id );

        if ( !nota ) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró una nota con el id ${ req.params.id }`
            });
        }

        return res.status(201).json({
            ok: true,
            nota
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

export const crearNota = async (req: Request, res: Response):Promise<Response> => {
    
    const nota = getRepository(Notas).create({
        title: req.body.title,
        nota: req.body.nota
    });

    try {
        
        nota.user = req.uid;

        const notaGuardada = await getRepository(Notas).save(nota);

        const notaWithInfo = await getRepository(Notas)
        .createQueryBuilder('notas')
        .innerJoinAndSelect('notas.user', 'usuario')
        .where('notas.id = :notaid', { notaid: notaGuardada.id })
        .getOne();

        return res.status(200).json({
            ok: true,
            notaGuardada,
            autor: notaWithInfo?.user.name,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
} 