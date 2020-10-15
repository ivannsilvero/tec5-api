"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const usuario_controller_1 = require("../controllers/usuario.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const express_validator_1 = require("express-validator");
exports.router = express_1.Router();
exports.router
    .route('/')
    .get(usuario_controller_1.getUsuarios)
    .post([
    express_validator_1.check('email', 'El email es obligatorio').isEmail(),
    express_validator_1.check('password', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validar_campos_1.validarCampos
], usuario_controller_1.loginUsuario);
exports.router
    .route('/:id')
    .get(usuario_controller_1.getUsuario);
exports.router
    .route('/new')
    .post([
    express_validator_1.check('name', 'El nombre es obligatorio').not().isEmpty(),
    express_validator_1.check('email', 'El email es obligatorio').isEmail(),
    express_validator_1.check('password', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validar_campos_1.validarCampos
], usuario_controller_1.createUsuario);
exports.router
    .route('/auth/renew')
    .get(validar_jwt_1.validarJWT, usuario_controller_1.revalidarToken);
//# sourceMappingURL=usuario.routes.js.map