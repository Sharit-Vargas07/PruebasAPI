import articulo from '../models/Sdva.articulos.model'

export const registrarArticulos = async (req, res) => {
    try {
        const articulo = await articulo.create(req.body)

        if(articulo){
            res.status(200).json({Message: 'articulo registrado'})
        }else{
            res.status(403).json({Message: 'No se registro el articulo'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error
    })
    }
}
export const actualizarArticulos = async (req, res) => {
    try {
        const articulo = await articulo.findByIdAndUpdate(req.params.id, req.body)

        if(articulo){
            res.status(200).json({Message: 'articulo actualizado'})
        }else{
            res.status(404).json({Message: 'Not found'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}