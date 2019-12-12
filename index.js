import dotenv from 'dotenv';
import express from 'express';
import dataRouter from './api/data';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));



app.use('/api/data', dataRouter);
app.use(express.static('public'));

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});