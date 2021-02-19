import path from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


import Rutas from './routes';
import db from './database';

class Server {
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Conectado a base de datos labinia');

        } catch (error) {
            throw new Error( error );
        }

    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( helmet() );
        this.app.use( morgan('tiny') );
        this.app.use( express.json() );
        this.app.use( express.static(path.join(__dirname ,'/public')));
    }

    routes(){
       this.app.use('/api', Rutas);
    }

    listen(){
        this.app.listen( this.port, ()=> {

            console.log('SERVIDOR CORRIENDO EN PUERTO ' + this.port)
        })
    }

}

export default Server;