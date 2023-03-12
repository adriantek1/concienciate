import { Station } from '../Schemas/Station';

export default class StationManager
{
    public async create (data: any[]): Promise<boolean>
    {
		new Station(data).save();

        return true;
	}

	public async get (id: number)
    {
		let storedStation: any = await Station.findOne({
            id: id,
        });
    
        if (!storedStation)
        {
            return false;
        }
    
        return storedStation;
	}

    public async getAll (): Promise<string[] | boolean>
    {
		let storedStations: any = await Station.find({});
    
        if (!storedStations)
        {
            return false;
        }

        const stations: string[] = [];
        for (const station of storedStations)
        {
            stations.push(station);
        }
    
        return stations;
	}
}