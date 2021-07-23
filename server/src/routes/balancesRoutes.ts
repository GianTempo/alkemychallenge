import { Router } from 'express';

import balancesController from '../controllers/balancesController'
class BalancesRoutes {
    public router: Router = Router();

    constructor () {
        this.config();
    }

    config(): void {
        this.router.get('/', balancesController.balances);
        this.router.get('/:id', balancesController.getBalance);
        this.router.post('/', balancesController.addBalance);
        this.router.delete('/:id', balancesController.deleteBalance);
        this.router.put('/:id', balancesController.updateBalance);
    }
}

const balancesRoutes = new BalancesRoutes();
export default balancesRoutes.router;