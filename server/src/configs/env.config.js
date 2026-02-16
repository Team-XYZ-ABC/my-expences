import dotenv from "dotenv";
dotenv.config();

const requiredEnv = ["MONGO_URI", "PORT"];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`ENV ERROR: ${key} is not defined`);
    process.exit(1);
  }
});

export const ENV = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN
};
