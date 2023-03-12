import express, { json, Express, Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import * as User from './Routes/User'
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
//app.use('/user', User);

app.get('/', (req: Request, res: Response) =>
{
    res.render('./pages/index');
});

app.listen(port, () =>
{
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
    main();
});
