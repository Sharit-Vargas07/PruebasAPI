import { Router } from "express";
import {registrar,  actualizar,  buscar, listar } from '../controller/controllerRecursos.js';

const rutaRecursos = Router();

rutaRecursos.get('/listar', listar);
rutaRecursos.post('/registrar', registrar);
rutaRecursos.get('/buscar/:id_recursos', buscar); 
rutaRecursos.put('/actualizar/:id_recursos', actualizar);


export default rutaRecursos;