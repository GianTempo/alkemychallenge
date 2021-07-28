"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const balancesRoutes_1 = __importDefault(require("./routes/balancesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); //module to see request in the console
        this.app.use(cors_1.default()); //module to enable CORS
        this.app.use(express_1.default.json()); //module to let express understand JSON files
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/balances', balancesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
