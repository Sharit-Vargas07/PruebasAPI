import express from 'express';
import bodyParser from 'body-parser';
import rutaCultivos from './src/routes/CultivosRoutesdevSdva.js';
import rutaCostos from './src/routes/CostosRoutesdevSdva.js';


const servidor = express();


//Configuraciones del servidor 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended:false }));

servidor.set('views engine', 'ejs');
servidor.set('views', './views');
servidor.use(express.static('./public'));
servidor.get('/documentCostosdevSdva', (req, res)=>{
  res.render('documentCostosdevSdva.ejs');
});

servidor.use ('/costos',rutaCostos);
/* servidor.use ('/cultivos',rutaCultivos);  */
servidor.listen(4000,()=>{
  console.log('Sirve');
}); 