import { PSH } from '../Schemas/PSH';

export default class PSHManager
{
    public async create (data: any): Promise<boolean>
    {
		new PSH(data).save();

        return true;
	}

	public async get (id: string)
    {
		let storedPSH: any = await PSH.findOne({
            id: id,
        });
    
        if (!storedPSH)
        {
            return false;
        }
    
        return storedPSH;
	}

    public async addDay (id: string, day: string)
    {
		let storedPSH: any = await PSH.findOne({
            id: id,
        });
    
        if (!storedPSH)
        {
            return false;
        }
    
        try
        {
            storedPSH.days.push(day);
            storedPSH.save();
            return true;
        }
        catch(err: any)
        {
            return false;
        }
	}

    public async getAll (): Promise<string[] | boolean>
    {
		let storedPSH: any = await PSH.find({});
    
        if (!storedPSH)
        {
            return false;
        }

        const PSHs: string[] = [];
        for (const PSH of storedPSH)
        {
            PSHs.push(PSH);
        }
    
        return PSHs;
	}
}