import { Router } from "express";
import {registrar,  actualizar,  buscar, listar } from '../controllers/controllerRecursos.js';
import {check} from 'express-validator';
import {validarToken} from "../controllers/autenticacion.js"


const rutaRecursos = Router();

rutaRecursos.get('/listar', validarToken, listar);
rutaRecursos.post('/registrar', validarToken,check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'), registrar);
rutaRecursos.get('/buscar/:id_recursos', validarToken, buscar); 
rutaRecursos.put('/actualizar/:id_recursos',validarToken, check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'), actualizar);


export default rutaRecursos;