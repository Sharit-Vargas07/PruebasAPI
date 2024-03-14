import app from "./app.js";
import { dbconnect } from "./config.js";

dbconnect();
app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})