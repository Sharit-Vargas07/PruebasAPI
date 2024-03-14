import mongoose from "mongoose"

export const dbconnect = async () => {
   
    try {
        await mongoose.connect('mongodb://localhost:27017/prenderiaAPI')
        console.log('Conexion exitosa')
    } catch (error) {
        console.log('Error de conexion' + error)
    }
}

export const SECRET_TOKEN = 'mitokensecreto'