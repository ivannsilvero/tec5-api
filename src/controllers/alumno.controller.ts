/**
 * CONTROLADOR
 * DOMINIO/api/alumno
 */

import { Request, Response } from 'express';
import { Alumno } from '../entity/Alumno';
import { getRepository } from 'typeorm';

export const getAlumnos = async (_: Request, res: Response):Promise<Response> => {

    const alumnos = await getRepository(Alumno).find();

    return res.status(201).json({
        ok: true,
        alumnos
    });

}

export const getAlumno = async (req: Request, res: Response):Promise<Response> => {

    try {

        const alumno = await getRepository(Alumno).findOne( req.params.id );

        if ( !alumno ) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${ req.params.id }`
            });
        }
        
        return res.status(201).json({
            ok: true,
            alumno
        });   
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });  
    }


} 

export const createAlumnos = async (req: Request, res: Response):Promise<Response> => {

    try {

        const alumno = await getRepository(Alumno).findOne({ dni: req.body.dni });

        if ( alumno ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un alumno con ese DNI'
            });
        }

        const newAlumno = getRepository(Alumno).create(req.body);

        await getRepository(Alumno).save(newAlumno);

        return res.status(201).json({
            ok: true,
            alumno: newAlumno
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });  
    }

}

export const updateAlumno = async (req: Request, res: Response):Promise<Response> => {
    
    const alumno = await getRepository(Alumno).findOne( req.params.id );

    try {
        
        if ( !alumno ) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${ req.params.id }`
            });
        }

        getRepository(Alumno).merge(alumno, req.body);
        const result = await getRepository(Alumno).save(alumno); 
        return res.status(201).json({
            ok: true,
            msg: 'Alumno actualizado exitosamente',
            result
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

export const deleteAlumno = async (req: Request, res: Response):Promise<Response> => {

    const alumno = await getRepository(Alumno).findOne(req.params.id);
    
    try {
        
        if ( !alumno ) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${ req.params.id }`
            });
        }
    
        const result = await getRepository(Alumno).delete(req.params.id)
    
        return res.status(201).json({
            ok: true,
            msg: 'Alumno borrado exitosamente',
            result
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}