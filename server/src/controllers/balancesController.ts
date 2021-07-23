import { Request, Response } from 'express';

import pool from '../database';


//TO-DO: Seguir con el tutorial para hacer la REST API.
class BalancesController {
    public balances(req: Request, res: Response) {
        pool.query('DESCRIBE balances');
        res.json('Balances');
    }
}
 

const balancesController = new BalancesController();

export default balancesController;