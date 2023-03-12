import express, { json, Express, Request, Response } from 'express';

import Database from './Database/Database';
const database: Database = new Database();

const router = express.Router();

export default router;

router.use((req: Request, res: Response, next: any) =>
{
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req: Request, res: Response) =>
{
    const result: boolean = await database.User.get(req.params.username, req.params.password);

    if (result !== false)
    {
        return res.send({ username: result });
    }
    else if (result === false)
    {
        return res.send({ success: false });
    }
});

router.post('/', async (req: Request, res: Response) =>
{
    const result: boolean = await database.User.create(req.params.username, req.params.name);

    if (result === true)
    {
        return res.send({ success: true });
    }
    
    return res.send({ success: false });
});

router.put('/', async (req: Request, res: Response) =>
{
    // Actualizar usuario
});