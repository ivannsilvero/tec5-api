import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import { app as IndexRouter } from './routes/index.routes';
import { Alumno } from './entity/Alumno';
import { Notas } from './entity/Notas';
import { Usuario } from './entity/Usuario';

const main = async () => {

    await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        username: 'tec5',
        password: 'tec5',
        entities: [Alumno, Notas, Usuario],
        synchronize: true
    });

    const app = express();

    const PORT = process.env.PORT || 4000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(IndexRouter);

    app.get('/', (_, res) => {
        res.send('Hola maestro');
    });

    app.listen(PORT, () => {
        
        console.log(`Servidor corriendo en puerto ${ PORT }`);

    });

}

main().catch((err) => {
    console.log(err);
})