import * as mongoose from 'mongoose';

export interface PSHType
{
	name: string,
    parada: string,
	horas: string,
    entregados: any[],
}

const PSHSchema = new mongoose.Schema<PSHType>({
    name: { type: String },
    parada: { type: String },
    horas: { type: String },
    entregados: { type: [Any] },
});

export const PSH: mongoose.Model<PSHType> = mongoose.models.PSH || mongoose.model<PSHType>('PSH', PSHSchema);