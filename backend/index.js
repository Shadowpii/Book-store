import express from 'express';
import { PORT, MONGO_URI } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());

app.use(cors());

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN Bookstore');
});

app.use('/books',booksRoute);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to Database');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('Failed to connect to Database', err);
    });
