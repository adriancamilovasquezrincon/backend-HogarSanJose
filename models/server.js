import express from 'express';
import cors from 'cors';
import dbConection from '../database/config.js';
import fileUpload from 'express-fileupload';
import gasto from '../routes/gasto.js';
import ingreso from '../routes/ingreso.js';
import persona from '../routes/persona.js';
import rubro from '../routes/rubro.js';
import usuario from '../routes/usuario.js';
import contacto from '../routes/contacto.js';

class Server {
    constructor() {
        // crear servidor
        // conectar a la red
        // middlewares
        // rutas o routes
        this.port = process.env.PORT
        this.app = express();
        this.middlewares();
        this.dbConexion();
        this.routes();
    }
    routes() {
        this.app.use('/api/gasto',gasto)
        this.app.use('/api/ingreso',ingreso)
        this.app.use('/api/persona',persona)
        this.app.use('/api/rubro',rubro)
        this.app.use('/api/usuario',usuario)
        this.app.use('/api/contacto',contacto)
    }
    async dbConexion(){
       await dbConection()
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
        this.app.use(fileUpload({
            useTempFiles:true,
            useTempFiles:'/tmp/',
            createParentPath:true
        }))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}
export { Server }