import mongoose from 'mongoose';

import UserManager from './Managers/UserManager';

export default class Database
{
    constructor()
    {
        this.User = new UserManager();
    }

    User: UserManager;

    public async connect (): Promise<boolean>
    {
        mongoose.set('strictQuery', false);

        mongoose.connect((process.env.mongo as string ?? '')).then(() =>
        {
            console.log('⚡️ [database]: Connected to MongoDB');
        }).catch((err: any) =>
        {
            console.error('⚡️ [database]: Could not connect to the MongoDB database: ' + err);
        });

        return true;
    }
}