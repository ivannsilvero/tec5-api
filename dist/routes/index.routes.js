"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const alumno_routes_1 = require("./alumno.routes");
const usuario_routes_1 = require("./usuario.routes");
const notas_routes_1 = require("./notas.routes");
exports.app.use('/api/alumno', alumno_routes_1.router);
exports.app.use('/api/usuario', usuario_routes_1.router);
exports.app.use('/api/nota', notas_routes_1.router);
//# sourceMappingURL=index.routes.js.map