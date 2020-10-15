import jwt from 'jsonwebtoken';
import config from '../config/jwt.config';

export const generarJWT = ( uid: number, name: string ) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign( payload, config.secretOrPrivateKey, {
            expiresIn: '2h'
        }, (err, token) => {
            
            if( err ) {
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve( token );
        
        });

    });

}