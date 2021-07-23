import { Request, Response } from 'express';

import pool from '../database';


//TO-DO: Seguir con el tutorial para hacer la REST API.
class BalancesController {
    public async balances(req: Request, res: Response) {
        const balances = await pool.query('SELECT * FROM balances');
        res.json(balances);
    }


    /** 
     * Function to get only one balance from database.
     * It recieves an id wich will be used to get the balance matching that id.
    */
    public async getBalance(req: Request, res: Response) {
        const balance = await pool.query('SELECT * FROM balances WHERE id = ?', req.params.id);
        if (balance.length > 0) {
            return res.json(balance[0]);
        }
        else {
            res.status(404).json({text: 'Balance not found'});
        }
    }

    public async addBalance(req: Request, res: Response) {
        await pool.query('INSERT INTO balances set ?', [req.body]);
        res.json({message: 'Added balance succefully'})
    }

    public async deleteBalance(req: Request, res: Response) {
        await pool.query('DELETE FROM balances WHERE id = ?', req.params.id);
        res.send('Deleted balance');
    }

    public async updateBalance(req: Request, res: Response) {
        await pool.query('UPDATE balances SET ? WHERE id = ?', [req.body, req.params.id]);
        res.json({ text: 'Balance updated' })
    }
}
 

const balancesController = new BalancesController();

export default balancesController;