import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import balancesRoutes from './routes/balancesRoutes';
class Server {

    public app:Application;

    constructor () {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev')); //module to see request in the console
        this.app.use(cors()); //module to enable CORS
        this.app.use(express.json()); //module to let express understand JSON files
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/balances', balancesRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port ${this.app.get('port')}`);
        })
    }
}

const server = new Server();
server.start();