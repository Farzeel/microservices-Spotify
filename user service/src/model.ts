import  { Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin' | string;
  playlist: string[]; 
//   createdAt: Date;
//   updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'], 
    },
    playlist: {
      type: [String], 
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>('User', userSchema);


