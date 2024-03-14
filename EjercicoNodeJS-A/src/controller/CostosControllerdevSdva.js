import {query} from 'express';
import { pool } from '../database/conexion.js';
import { validationResult } from 'express-validator';

export const listar = async (req,res) => {
    try{
    let sql = 'SELECT * FROM costos';
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json(result);
    }else{
      res.status(404).json({'message': 'No se encontraron costos '});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  };
  
  export const registrar = async (req, res) =>{
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
    const {fk_id_tipo_recursos, fk_id_actividad, precio} = req.body;
  
    let checkSql = `SELECT COUNT(*) AS count FROM tipo_recursos WHERE id_tipo_recursos = ?`;
    let checkSql2 = `SELECT COUNT(*) AS count FROM actividad WHERE id_actividad = ?`;
    const [checkResult] = await pool.query(checkSql, [fk_id_tipo_recursos]);
    const [checkResult2] = await pool.query(checkSql2, [fk_id_actividad]);
    if (checkResult[0].count === 0) {
      return res.status(400).json({ status: 400, message: 'El valor de fk_id_tipo_recursos no existe en la tabla tipo_recursos' });
    }
    if (checkResult2[0].count === 0) {
      return res.status(400).json({ status: 400, message: 'El valor de fk_id_actividad no existe en la tabla actividad' });
    }

    let sql =  `INSERT INTO costos (fk_id_tipo_recursos, fk_id_actividad, precio) VALUES (?, ?, ?)`;
  
    const [rows] = await pool.query(sql,[fk_id_tipo_recursos, fk_id_actividad, precio]);
    if (rows.affectedRows > 0) {
      res.status(200).json({'status':200,'message':'Registro exitoso de sus costos'});
    }else{
      res.status(403).json({'status':403,'message':'Fallo el registro de sus costos'});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  
  };
  
  
  export const actualizarAlquiler = async (req, res) => {
    try {
        const alquiler = await alquiler.findByIdAndUpdate(req.params.id, req.body)

        if(alquiler){
            res.status(200).json({Message: 'Alquiler actualizado'})
        }else{
            res.status(404).json({Message: 'Not found'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}