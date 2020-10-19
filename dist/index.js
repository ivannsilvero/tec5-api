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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const index_routes_1 = require("./routes/index.routes");
const Alumno_1 = require("./entity/Alumno");
const Notas_1 = require("./entity/Notas");
const Usuario_1 = require("./entity/Usuario");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        username: 'tec5',
        password: 'tec5',
        entities: [Alumno_1.Alumno, Notas_1.Notas, Usuario_1.Usuario],
        synchronize: true
    });
    const app = express_1.default();
    const PORT = process.env.PORT || 4000;
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(index_routes_1.app);
    app.get('/', (_, res) => {
        res.send('Hola maestro');
    });
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}, asd: ${process.env.DATABASE_URL}`);
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map