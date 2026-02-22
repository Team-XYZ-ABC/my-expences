import { Router } from "express";
import { fetchAllUsers } from "../controllers/user.controller.js";

const Route = Router();

Route.get("/users", fetchAllUsers);

export default Route;
