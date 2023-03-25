import mongoose from 'mongoose';

import PSHManager from './Managers/PSHManager';
import StationManager from './Managers/StationManager';

export default class Database
{
    constructor()
    {
        this.PSH = new PSHManager();
        this.Station = new StationManager();
    }

    PSH: PSHManager;
    Station: StationManager;

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