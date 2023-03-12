import express, { json, Express, Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import { userRouter } from './Routes/User'
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
app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) =>
{
    res.render('./pages/index');
});

app.post('/save', async (req: Request, res: Response) =>
{
    res.redirect('/');

    console.log(req.body);

    let id: string = '';
    let days: string[] = [];

    for (const key in req.body)
    {
        id = key.split('_')[1];
        days.push(req.body[key]);
    }

    for (const day in days)
    {
        await database.PSH.addDay(id, day);
    }
});

app.listen(port, () =>
{
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
    main();
});