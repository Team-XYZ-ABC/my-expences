import {Router} from 'express';
import { login, register } from '../controllers/auth.controller.js';

const Route = Router();

Route.post('/register', register);
Route.post('/login', login);

export default Route;