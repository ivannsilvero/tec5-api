"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revalidarToken = exports.loginUsuario = exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const Usuario_1 = require("../entity/Usuario");
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../helpers/jwt");
exports.getUsuarios = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield typeorm_1.getRepository(Usuario_1.Usuario).find();
    return res.status(201).json({
        ok: true,
        usuarios
    });
});
exports.getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield typeorm_1.getRepository(Usuario_1.Usuario).findOne(req.params.id);
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un usuario con el id ${req.params.id}`
            });
        }
        return res.status(201).json({
            ok: true,
            usuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
});
exports.createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield typeorm_1.getRepository(Usuario_1.Usuario).findOne({ email: req.body.email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese correo'
            });
        }
        const newUsuario = typeorm_1.getRepository(Usuario_1.Usuario).create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            img: req.body.img,
            google: req.body.google
        });
        const salt = bcryptjs_1.default.genSaltSync();
        newUsuario.password = bcryptjs_1.default.hashSync(req.body.password, salt);
        yield typeorm_1.getRepository(Usuario_1.Usuario).save(newUsuario);
        const token = yield jwt_1.generarJWT(newUsuario.id, newUsuario.name);
        return res.status(201).json({
            ok: true,
            usuario: newUsuario,
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
});
exports.loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield typeorm_1.getRepository(Usuario_1.Usuario).findOne({ email: req.body.email });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario con ese correo'
            });
        }
        const validPassword = bcryptjs_1.default.compareSync(req.body.password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Clave incorrecta'
            });
        }
        const token = yield jwt_1.generarJWT(usuario.id, usuario.name);
        return res.status(201).json({
            ok: true,
            usuario,
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el administrador'
        });
    }
});
exports.revalidarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.params;
    const token = yield jwt_1.generarJWT(parseInt(id), name);
    return res.status(201).json({
        ok: true,
        id,
        name,
        token
    });
});
//# sourceMappingURL=usuario.controller.js.map