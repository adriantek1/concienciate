import * as mongoose from 'mongoose';

export interface StationType
{
	name: string,
	hora: string,
    usuarios: string[],
    id: number,
}

const StationSchema = new mongoose.Schema<StationType>({
    name: { type: String },
    hora: { type: String },
    usuarios: { type: [String] },
    id: { type: Number },
});

export const Station: mongoose.Model<StationType> = mongoose.models.Station || mongoose.model<StationType>('Station', StationSchema);