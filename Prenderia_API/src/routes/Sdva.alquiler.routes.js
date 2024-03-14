import { Router } from "express";
import { actualizarAlquiler, registrarAlquiler } from "../controllers/Sdva.alquiler.controller.js";


const rutaAlquiler = Router()

registrarAlquiler.post('/registrarAlquiler', registrarAlquiler);
actualizarAlquiler.post('/registrarAlquiler', actualizarAlquiler);

export default rutaAlquiler