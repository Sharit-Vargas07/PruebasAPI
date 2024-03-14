import Alquiler from "../models/Sdva.alquiler.models.js";

export const registrarAlquiler = async (req, res) => {
    try {
        const alquiler = await Alquiler.create(req.body)

        if(alquiler){
            res.status(200).json({Message: 'Alquiler registrado'})
        }else{
            res.status(403).json({Message: 'No se registro el alquiler'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error
    })
    }
}
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