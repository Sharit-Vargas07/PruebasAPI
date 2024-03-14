import { pool } from "../database/conexion.js";
import multer from "multer";

const storage = multer.diskStorage(
    {
        destination: function(req,img,cb){
            cb(null,"public/img");
        },
    filename: function(req,img,cb){
        cb(null, img.originalname)
    }
    }
)


const upload=multer({ storage: storage });
export const cargarImagen = upload.single('img');

export const listarJuego = async (req, res) => {
    try{
  
      const [result] = await pool.query('SELECT * FROM juegos');
  
      if(result.length > 0){
        res.status(200).json(result);
      }
      else{
        res.status(404).json({status:404 ,"message": 'No hay juegos registrados'});
        }
    } catch(error){
      res.status(500).json( {
        message: "Error en el servidor" + error
      });
    }
  };

export const registrarJuego = async (req, res) => {
    try {
        // Asegúrate de que los datos requeridos estén presentes y sean válidos
        const { nombre, descripcion, precio } = req.body;
        let imagen = req.file.filename
        // Asegúrate de que la tabla sea la correcta para los juegos
        let sql = `INSERT INTO juegos (nombre, descripcion, precio, imagen) VALUES ('${nombre}', '${descripcion}', '${precio}', '${imagen}')`;

        const [rows] = await pool.query(sql);
        if (rows.affectedRows > 0) {
            res.status(200).json({ 'status': 200, 'message': 'Registro exitoso' });
        } else {
            res.status(404).json({ 'status': 404, 'message': 'Fallo el registro' });
        }
    } catch (error) {
        res.status(500).json({ 'status': 500, 'message': 'Error en el sistema: ' + error });
    }
}
