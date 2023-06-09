import * as mongoose from 'mongoose';

export interface PSHType
{
	name: string,
    id: string,
    station: string,
	horas: string,
    days: string[],
}

const PSHSchema = new mongoose.Schema<PSHType>({
    name: { type: String },
    id: { type: String },
    station: { type: String },
    horas: { type: String },
    days: { type: [String] },
});

export const PSH: mongoose.Model<PSHType> = mongoose.models.PSH || mongoose.model<PSHType>('PSH', PSHSchema);