import { Router } from "express";
import {check} from 'express-validator';
import { listarUsuarios, registrarUsuarios } from '../controller/controllerUsuario.js';
import { registrarJuego } from "../controller/juegos.controller.js";
import { validarUsuario } from "../../validate/usuario.js";
import { validarToken } from "../controller/autenticacion.js";
import { cargarImagen } from "../controller/juegos.controller.js";

const rutaUsuario = Router();

rutaUsuario.get('/listar',validarToken,listarUsuarios);
rutaUsuario.post('/registrar', validarUsuario, registrarUsuarios)
rutaUsuario.post('/guardar',cargarImagen, registrarJuego)
/* rutaUsuario.get('/listarJuego',validarUsuario, listarJuego) */


export default rutaUsuario;