import { User } from '../Schemas/User';

export default class UserManager
{
    public async create (username: string, name: string): Promise<boolean>
    {
        const password: string = username + '_' + Math.random().toString(36).slice(-5);

		new User({
            username: username,
            name: name,
            password: password,
        }).save();

        console.log(password);

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