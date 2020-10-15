import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config/jwt.config';

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-token');
    let payload;

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Sin token en solicitud'
        });
    }

    try {
        
        payload = <any>jwt.verify(
            token,
            config.secretOrPrivateKey
        );

        const { uid, name } = payload

        req.uid = uid;
        req.name = name;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        });
    }

    return next();

}