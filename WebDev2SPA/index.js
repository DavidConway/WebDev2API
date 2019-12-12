import dotenv from 'dotenv';
import express from 'express';
import dataRouter from './api/data';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/data', dataRouter);
app.use(express.static('public'));

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});