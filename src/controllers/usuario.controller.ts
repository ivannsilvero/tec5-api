/**
 * CONTROLADOR
 * DOMINIO/api/usuario
 */

import { Request, Response } from 'express';
import { Usuario } from '../entity/Usuario';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { generarJWT } from '../helpers/jwt';

export const getUsuarios = async (_: Request, res: Response):Promise<Response> => {

    const usuarios = await getRepository(Usuario).find();

    return res.status(201).json({
        ok: true,
        usuarios
    });

}

export const getUsuario = async (req: Request, res: Response):Promise<Response> => {

    try {
     
        const usuario = await getRepository(Usuario).findOne( req.params.id );

        if ( !usuario ) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un usuario con el id ${ req.params.id }`
            });
        }

        return res.status(201).json({
            ok: true,
            usuario
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

export const createUsuario = async (req: Request, res: Response):Promise<Response> => {

    try {

        const usuario = await getRepository(Usuario).findOne({ email: req.body.email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            });
        }

        const newUsuario = getRepository(Usuario).create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            img: req.body.img,
            google: req.body.google
        });

        const salt = bcrypt.genSaltSync();

        newUsuario.password = bcrypt.hashSync( req.body.password, salt );

        await getRepository(Usuario).save(newUsuario);

        const token = await generarJWT( newUsuario.id, newUsuario.name );

        return res.status(201).json({
            ok: true,
            usuario: newUsuario,
            token
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

export const loginUsuario = async (req: Request, res: Response):Promise<Response> => {
    
    try {

        const usuario = await getRepository(Usuario).findOne({ email: req.body.email });

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario con ese correo'
            });
        }

        const validPassword = bcrypt.compareSync( req.body.password, usuario.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Clave incorrecta'
            });
        }

        const token = await generarJWT( usuario.id, usuario.name );

        return res.status(201).json({
            ok: true,
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }

}

export const revalidarToken = async (req: Request, res: Response):Promise<Response> => {

    const { id, name } = req.params;

    const token = await generarJWT( parseInt(id), name );

    return res.status(201).json({
        ok: true,
        id,
        name,
        token
    });

}