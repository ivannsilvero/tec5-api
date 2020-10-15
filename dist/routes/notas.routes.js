"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const nota_controller_1 = require("../controllers/nota.controller");
exports.router = express_1.Router();
exports.router.use(validar_jwt_1.validarJWT);
exports.router
    .route('/')
    .get(nota_controller_1.getNotas)
    .post(nota_controller_1.crearNota);
exports.router
    .route('/:id')
    .get(nota_controller_1.getNota);
//# sourceMappingURL=notas.routes.js.map