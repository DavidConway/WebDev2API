import express from 'express';
import { data } from './data';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
    res.send({ data: data });
});

export default router;