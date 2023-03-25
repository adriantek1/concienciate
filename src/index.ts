import express, { json, Express, Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import { PSHRouter } from './Routes/PSH'
import path from 'path';

import Database from './Database/Database';

async function main ()
{
    await (new Database()).connect();
}

const database: Database = new Database();

dotenv.config();

const app: Express = express();
const port: any = 2333;

app.use(json());
app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join('src', 'views'));
app.use('/psh', PSHRouter);

app.get('/', async (req: Request, res: Response) =>
{
    const station0 = (await database.Station.get(0));
    const station1 = (await database.Station.get(1));
    const station2 = (await database.Station.get(2));
    const station3 = (await database.Station.get(3));
    const station4 = (await database.Station.get(4));
    const station5 = (await database.Station.get(5));
    const station6 = (await database.Station.get(6));
    const station7 = (await database.Station.get(7));
    const station8 = (await database.Station.get(8));
    const station9 = (await database.Station.get(9));
    const pshs = (await database.PSH.getAll());

    return res.render('./pages/index', {
        station0,
        station1,
        station2,
        station3,
        station4,
        station5,
        station6,
        station7,
        station8,
        station9,
        pshs,
    });
});

app.post('/save', async (req: Request, res: Response) =>
{
    res.redirect('/');

    let id: string = '';
    let days: string[] = [];

    for (const key in req.body)
    {
        id = key.split('_')[1];
        days.push(req.body[key]);
    }

    if (days.length = 1)
    {
        await database.PSH.addDay(id, days[0]);
    }
    else
    {
        for (const day in days)
        {
            await database.PSH.addDay(id, day);
        }
    }
});

app.listen(port, () =>
{
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
    main();
});