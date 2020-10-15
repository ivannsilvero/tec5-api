import { Router } from 'express';
import { validarJWT } from '../middlewares/validar-jwt';
import { getNotas, getNota, crearNota } from '../controllers/nota.controller';

export const router = Router();

router.use(validarJWT);

router
.route('/')
.get(getNotas)
.post(crearNota)

router
.route('/:id')
.get(getNota)