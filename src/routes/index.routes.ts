import express from 'express';
export const app = express();

import { router as alumnoRouter } from './alumno.routes';
import { router as usuarioRouter } from './usuario.routes';
import { router as notasRouter } from './notas.routes';

app.use('/api/alumno', alumnoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/nota', notasRouter);