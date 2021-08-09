import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';

class AuthController {
    public async signup(req: Request, res: Response) {
        const { username, password } = req.body;
        const newUser = { username, password };
        await pool.query('INSERT INTO users set ?', [newUser]);
        const token = jwt.sign({ id: newUser.password }, 'secretKey')
        res.status(200).json({ token });
    }

    public async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        if (user.toString() == '') { //Verify that user exists
            res.status(401).json({ message: 'User not found' });
        }
        else if (user[0].password !== password) { //Verify that passwords matches
            res.status(401).json({ message: "Passwords doesn't match" })
        }
        else { //Both user and password are correct
            const token = jwt.sign({ id: user.password }, 'secretKey')
            return res.status(200).send({
                message: 'success!',
                token: token,
                user: user[0].id
            });
        }
    }
}
 
export const authController = new AuthController();