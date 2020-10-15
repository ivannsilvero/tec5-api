import * as dotenv from 'dotenv';

dotenv.config();

export default {
    secretOrPrivateKey: process.env.SECRET_JWT_SEED || 'development'
}