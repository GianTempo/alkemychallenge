import { Router } from 'express';

class BalancesRoutes {
    public router: Router = Router();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => { res.send('Hello, balances'); });
    }
}

const balancesRoutes = new BalancesRoutes();
export default balancesRoutes.router;