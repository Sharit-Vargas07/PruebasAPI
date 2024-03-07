import bodyParser from 'body-parser';
import express from 'express';
import rutaUsuario from './src/routers/route.Usuario.js';
import autRoute from './src/routers/route.Autenticacion.js';

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));


servidor.set('views engine', 'ejs');
servidor.set('views','./views');
servidor.use(express.static('./public'));
servidor.get('/document', (req, res)=> {
  res.render('document.ejs');
});

servidor.use('/usuario', rutaUsuario);
servidor.use(autRoute);

servidor.listen(5000, ()=>{
  console.log("Servidor rodando")
});
