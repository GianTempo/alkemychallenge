import { Router } from 'express';

import balancesController from '../controllers/balancesController'
class BalancesRoutes {
    public router: Router = Router();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', balancesController.balances);
    }
}

const balancesRoutes = new BalancesRoutes();
export default balancesRoutes.router;