import  {pool} from "../database/conexion.js";
import {validationResult} from 'express-validator';

export const listarUsuarios = async (req, res) => {
  try{

    const [result] = await pool.query('SELECT * FROM usuarios');

    if(result.length > 0){
      res.status(200).json(result);
    }
    else{
      res.status(404).json({status:404 ,"message": 'No hay usuarios registrados'});
      }
  } catch(error){
    res.status(500).json( {
      message: "Error en el servidor" + error
    });
  }
};

export const registrarUsuarios = async (req, res) => {
  try{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).json(errors);
    }
    
    const {nombres, direccion, telefono, correo, rol, password} = req.body;
  let sql =  `INSERT INTO usuarios (nombres,direccion, telefono, correo, rol, password) VALUES (?, ?, ?, ?, ?, ?)`;

  const [rows] = await pool.query(sql,[nombres, direccion,  telefono, correo, rol, password]);
  if (rows.affectedRows > 0) {
    res.status(200).json({'status':200,'message':'Registro exitoso'});
  }else{
    res.status(404).json({'status':404,'message':'Fallo el registro '});
  }
} catch(error){
  res.status(500).json({'status':500,'message':'Error en el sistema: '+error});
}

  }