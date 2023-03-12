import express, { Router, json, Express, Request, Response } from 'express';

import Database from '../Database/Database';
const database: Database = new Database();

export const stationRouter = Router();

stationRouter.use((req: Request, res: Response, next: any) =>
{
    console.log('Time: ', Date.now());
    next();
});

stationRouter.get('/0', async (req: Request, res: Response) =>
{
    res.render('./pages/stations/0');
});

stationRouter.post('/', async (req: Request, res: Response) =>
{
    console.log(req.body);
    console.log(req.params);
    //database.Station.create();
});