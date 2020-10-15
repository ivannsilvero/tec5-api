import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import { app as IndexRouter } from './routes/index.routes';

const app = express();
createConnection();

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