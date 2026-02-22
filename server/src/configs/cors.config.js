import {ENV} from '../configs/env.config.js'

export const corsOptions = {
    origin: ENV.CLIENT_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
