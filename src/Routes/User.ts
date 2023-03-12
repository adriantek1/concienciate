import express, { Router, json, Express, Request, Response } from 'express';

import Database from '../Database/Database';
const database: Database = new Database();

export const userRouter = Router();

userRouter.use((req: Request, res: Response, next: any) =>
{
    console.log('Time: ', Date.now());
    next();
});

userRouter.get('/', async (req: Request, res: Response) =>
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

userRouter.post('/', async (req: Request, res: Response) =>
{
    const result: boolean = await database.User.create(req.params.username, req.params.name);

    if (result === true)
    {
        return res.send({ success: true });
    }
    
    return res.send({ success: false });
});

userRouter.put('/', async (req: Request, res: Response) =>
{
    // Actualizar usuario
});