"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_config_1 = __importDefault(require("../config/jwt.config"));
exports.validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    let payload;
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Sin token en solicitud'
        });
    }
    try {
        payload = jsonwebtoken_1.default.verify(token, jwt_config_1.default.secretOrPrivateKey);
        const { uid, name } = payload;
        req.uid = uid;
        req.name = name;
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        });
    }
    return next();
};
//# sourceMappingURL=validar-jwt.js.map