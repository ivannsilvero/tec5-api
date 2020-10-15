"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const index_routes_1 = require("./routes/index.routes");
const app = express_1.default();
typeorm_1.createConnection();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(index_routes_1.app);
app.get('/', (_, res) => {
    res.send('Hola maestro');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
//# sourceMappingURL=index.js.map