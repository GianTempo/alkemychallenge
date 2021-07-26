import { Router } from 'express';

import balancesController from '../controllers/balancesController'
class BalancesRoutes {
    public router: Router = Router();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/:clientId/latest', balancesController.getLatestBalances);
        this.router.get('/:clientId', balancesController.balances);
        this.router.get('/:clientId/:balanceid', balancesController.getBalance);
        this.router.post('/', balancesController.addBalance);
        this.router.delete('/:balanceId', balancesController.deleteBalance);
        this.router.put('/:id', balancesController.updateBalance);
    }
}

const balancesRoutes = new BalancesRoutes();
export default balancesRoutes.router;