import jwt from "jsonwebtoken";
import { ENV } from "../configs/env.config.js";

export const generateToken = (id) => {
  return jwt.sign(
    { id },
    ENV.JWT_SECRET,
    { expiresIn: ENV.JWT_EXPIRES_IN }
  );
};
