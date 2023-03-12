import * as mongoose from 'mongoose';

export interface UserType
{
	username: string,
    name: string,
	password: string,
}

const UserSchema = new mongoose.Schema<UserType>({
	username: { type: String },
    name: { type: String },
    password: { type: String },
});

export const User: mongoose.Model<UserType> = mongoose.models.User || mongoose.model<UserType>('User', UserSchema);