import { Router } from "express";
import {check} from 'express-validator';
import { listarUsuarios, registrarUsuarios } from '../controller/controllerUsuario.js';
import { validarUsuario } from "../../validate/usuario.js";
import { validarToken } from "../controller/autenticacion.js";

const rutaUsuario = Router();

rutaUsuario.get('/listar',validarToken,listarUsuarios);
rutaUsuario.post('/registrar', validarUsuario, registrarUsuarios)


export default rutaUsuario;