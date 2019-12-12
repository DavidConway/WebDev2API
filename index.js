import dotenv from 'dotenv';
import express from 'express';
import dataRouter from './api/data';
import bodyParser from 'body-parser';
import './db';
import loaditems from './itemData';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));



app.use('/api/data', dataRouter);
app.use(express.static('public'));

if (process.env.seedDb) {
    loaditems();
}

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});