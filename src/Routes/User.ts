import express, { json, Express, Request, Response } from 'express';

import Database from './Database/Database';
const database: Database = new Database();

const router = express.Router();

export default router;

router.use(function timeLog(req: Request, res: Response, next: any)
{
    console.log('Time: ', Date.now());
    next();
});

router.get(function(req: Request, res: Response)
{
    const result: boolean = await database.User.get(username, password);

    if (result !== false)
    {
        return res.send({ username: result });
    }
    else if (result === false)
    {
        return res.send({ success: false });
    }
});

router.post(function(req: Request, res: Response)
{
    const result: boolean = await database.User.create(username, name);

    if (result === true)
    {
        return res.send({ success: true });
    }
    else if (result !== true)
    {
        return res.send({ success: false });
    }
});

router.put(function(req: Request, res: Response)
{
    // Actualizar usuario
});