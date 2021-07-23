import { Request, Response } from 'express';

import pool from '../database';

class BalancesController {

    /**
     * Function to get all balances from database.
     */
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

    /**
     * Function to add a balance to the database.
     * It recieves an object that contains all the data 
     */
    public async addBalance(req: Request, res: Response) {
        if (JSON.stringify(req.body) !== '{}') { //Verify that req body is not an empty object
            await pool.query('INSERT INTO balances set ?', [req.body]);
            res.json({ message: 'Added balance succefully' })
        }
        else { //If req body is an empty object, return 404 code error
            res.status(404).json({ text: 'You cant post an empty body' });
        };
    }


    /**
     * Function to delete a specific balance from database.
     * It recieves the id of the balance the user wants to delete.
     */
    public async deleteBalance(req: Request, res: Response) {
        await pool.query('DELETE FROM balances WHERE id = ?', req.params.id);
        res.send('Deleted balance');
    }


    /**
     * Function to update a balance of the database.
     * It recieves the id of the balance that the user wants to update.
     * It also recieves the data that has to be modified in the database.
     */
    public async updateBalance(req: Request, res: Response) {
        if (JSON.stringify(req.body) !== '{}') { //Verify that req body is not an empty object
            await pool.query('UPDATE balances SET ? WHERE id = ?', [req.body, req.params.id]);
            res.json({ text: 'Balance updated' })
        }
        else { //If req body is an empty object, return 404 code error
            res.status(404).json({ text: 'PUT body is empty' });
        }
    }
}
 

const balancesController = new BalancesController();

export default balancesController;
