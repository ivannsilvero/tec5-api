/**
 * DOMINIO/api/usuario
 */
import { Router } from 'express';
import { validarJWT } from '../middlewares/validar-jwt';
import { createUsuario, getUsuario, getUsuarios, loginUsuario, revalidarToken } from '../controllers/usuario.controller';
import { validarCampos } from '../middlewares/validar-campos';
import { check } from 'express-validator';

export const router = Router();

/**
 * Obtener todos los usuarios con 
 * GET DOMINIO/api/usuario
 * Login de usuario con 
 * POST DOMINIO/api/usuario
 */
router
.route('/')
.get(getUsuarios)
.post([
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
], loginUsuario)

/**
 * Obtener usuario por id DOMINIO/api/usuario/:id
 */
router
.route('/:id')
.get(getUsuario)

/**
 * Crear nuevo usuario DOMINIO/api/usuario/new
 */
router
.route('/new')
.post([
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
], createUsuario);

/**
 * Revalidar TOKEN DOMINIO/api/usuario/auth/renew
 */
router
.route('/auth/renew')
.get(validarJWT ,revalidarToken);