import express, { Router, json, Express, Request, Response } from 'express';

import Database from '../Database/Database';
const database: Database = new Database();

export const PSHRouter = Router();

PSHRouter.use((req: Request, res: Response, next: any) =>
{
    next();
});

PSHRouter.get('/:id', async (req: Request, res: Response) =>
{
    const result: boolean = await database.PSH.get(req.params.id);

    if (result !== false)
    {
        return res.send({ usuario: result });
    }
    else if (result === false)
    {
        return res.send({ success: false });
    }
});