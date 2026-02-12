import express from "express";
import Route from "./routes/auth.route.js";
import {ENV} from "./configs/env.config.js"
import cors from "cors";
const app = express();

/* ---------- Global Middlewares ---------- */
app.use(express.json()); // JSON body parser
const corsOptions = {
  origin: ENV.CLIENT_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));


/* ---------- Routes ---------- */
app.use('/api', Route);


/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and running",
  });
});

export default app;
