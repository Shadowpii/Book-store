import * as dotenv from 'dotenv';
dotenv.config();
export const PORT = 5555;

export const MONGO_URI = process.env.URI;