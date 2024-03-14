import express from 'express'
import morgan from 'morgan'

import rutaClientes from '../routes/Sdva.clientes.routes.js';
import rutaAlquiler from '../routes/Sdva.alquiler.routes.js';
import rutaInteres from '../routes/Sdva.intereses.routes.js';
import rutaArticulos from '../routes/Sdva.articulos.routes.js';

import { dbconnect } from './config.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/clientes', rutaClientes)
app.use('/articulos', rutaArticulos)
app.use('/alquiler', rutaAlquiler)
app.use('/intereses', rutaInteres)

app.use(rutaValidacion)
app.use(rutaConsultas)

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./public'))

app.get('/document', (req, res) => {
    res.render('document.ejs')
})

dbconnect();

export default app