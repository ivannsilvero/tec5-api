import { Usuario } from '../../src/entity/Usuario';

declare global {
    namespace Express {
        interface Request {
            uid: Usuario,
            name: string
        }
    }
}