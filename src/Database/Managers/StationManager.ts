import { Station } from '../Schemas/Station';

export default class StationManager
{
    public async create (data: any[]): Promise<boolean>
    {
		new Station(data).save();

        return true;
	}

	public async get (username: string, password: string)
    {
		let storedUser: any = await User.findOne({
            username: username,
            password: password,
        });
    
        if (!storedUser)
        {
            return false;
        }
    
        return storedUser;
	}

    public async getAll (): Promise<string[] | boolean>
    {
		let storedUsers: any = await User.find({});
    
        if (!storedUsers)
        {
            return false;
        }

        const users: string[] = [];
        for (const user of storedUsers)
        {
            users.push(user);
        }
    
        return users;
	}
}