import express from "express";
import cors from "cors";
import Route from "./routes/auth.route.js";
import { corsOptions } from "./configs/cors.config.js";
import userRoute from "./routes/user.route.js";
const app = express();

/* ---------- Global Middlewares ---------- */
app.use(express.json()); 
app.use(cors(corsOptions));


/* ---------- Routes ---------- */
app.use('/api', Route);
app.use('/api', userRoute);

/* ---------- Server Check ---------- */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and running",
  });
});

export default app;
