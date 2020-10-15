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
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearNota = exports.getNota = exports.getNotas = void 0;
const Notas_1 = require("../entity/Notas");
const typeorm_1 = require("typeorm");
exports.getNotas = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notas = yield typeorm_1.getRepository(Notas_1.Notas).find();
    return res.status(201).json({
        ok: true,
        notas
    });
});
exports.getNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nota = yield typeorm_1.getRepository(Notas_1.Notas).findOne(req.params.id);
        if (!nota) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró una nota con el id ${req.params.id}`
            });
        }
        return res.status(201).json({
            ok: true,
            nota
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
exports.crearNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nota = typeorm_1.getRepository(Notas_1.Notas).create({
        title: req.body.title,
        nota: req.body.nota
    });
    try {
        nota.user = req.uid;
        const notaGuardada = yield typeorm_1.getRepository(Notas_1.Notas).save(nota);
        const notaWithInfo = yield typeorm_1.getRepository(Notas_1.Notas)
            .createQueryBuilder('notas')
            .innerJoinAndSelect('notas.user', 'usuario')
            .where('notas.id = :notaid', { notaid: notaGuardada.id })
            .getOne();
        return res.status(200).json({
            ok: true,
            notaGuardada,
            autor: notaWithInfo === null || notaWithInfo === void 0 ? void 0 : notaWithInfo.user.name,
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
//# sourceMappingURL=nota.controller.js.map