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
exports.deleteAlumno = exports.updateAlumno = exports.createAlumnos = exports.getAlumno = exports.getAlumnos = void 0;
const Alumno_1 = require("../entity/Alumno");
const typeorm_1 = require("typeorm");
exports.getAlumnos = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnos = yield typeorm_1.getRepository(Alumno_1.Alumno).find();
    return res.status(201).json({
        ok: true,
        alumnos
    });
});
exports.getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumno = yield typeorm_1.getRepository(Alumno_1.Alumno).findOne(req.params.id);
        if (!alumno) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${req.params.id}`
            });
        }
        return res.status(201).json({
            ok: true,
            alumno
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
exports.createAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumno = yield typeorm_1.getRepository(Alumno_1.Alumno).findOne({ dni: req.body.dni });
        if (alumno) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un alumno con ese DNI'
            });
        }
        const newAlumno = typeorm_1.getRepository(Alumno_1.Alumno).create(req.body);
        yield typeorm_1.getRepository(Alumno_1.Alumno).save(newAlumno);
        return res.status(201).json({
            ok: true,
            alumno: newAlumno
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
exports.updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumno = yield typeorm_1.getRepository(Alumno_1.Alumno).findOne(req.params.id);
    try {
        if (!alumno) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${req.params.id}`
            });
        }
        typeorm_1.getRepository(Alumno_1.Alumno).merge(alumno, req.body);
        const result = yield typeorm_1.getRepository(Alumno_1.Alumno).save(alumno);
        return res.status(201).json({
            ok: true,
            msg: 'Alumno actualizado exitosamente',
            result
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
exports.deleteAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumno = yield typeorm_1.getRepository(Alumno_1.Alumno).findOne(req.params.id);
    try {
        if (!alumno) {
            return res.status(404).json({
                ok: false,
                msg: `No se encontró un alumno con el id ${req.params.id}`
            });
        }
        const result = yield typeorm_1.getRepository(Alumno_1.Alumno).delete(req.params.id);
        return res.status(201).json({
            ok: true,
            msg: 'Alumno borrado exitosamente',
            result
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
//# sourceMappingURL=alumno.controller.js.map