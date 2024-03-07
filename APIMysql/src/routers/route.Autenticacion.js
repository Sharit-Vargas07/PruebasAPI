import {validarUsu} from '../controller/autenticacion.js';
import { Router } from "express";

const autRoute = Router();

autRoute.post('/validar', validarUsu)

export default autRoute;

