import express, { json, Express, Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import { userRouter } from './Routes/User'
import { stationRouter } from './Routes/Station'
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
app.use('/station', stationRouter);

app.get('/', (req: Request, res: Response) =>
{
    res.render('./pages/index');
});

app.post('/save', (req: Request, res: Response) =>
{
    console.log(req.body);

    let id: string = '';

    for (const key in req.body)
    {
        id = key.split('_')[1];
    }

    console.log(id);
    console.log(req.body[0].split('_'));
});

app.listen(port, () =>
{
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
    main();
});
