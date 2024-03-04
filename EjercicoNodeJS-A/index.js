import express from 'express';
import bodyParser from 'body-parser';
import rutaRecursos from './src/routes/routes.Recursos.js'


const servidor = express();


//Configuraciones del servidor 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended:false }));

servidor.set('views engine', 'ejs');
servidor.set('views', './views');
servidor.use(express.static('./public'));
servidor.get('/documentRecursosSdva', (req, res)=>{
  res.render('documentRecursosSdva.ejs');
});

servidor.use ('/recursos',rutaRecursos);
/* servidor.use ('/cultivos',rutaCultivos); */
servidor.listen(4000,()=>{
  console.log('Sirve');
}); 