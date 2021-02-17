
import express from 'express';
import Rutas from './routes';
import cors from 'cors';
import path from 'path';


class Server {
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
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