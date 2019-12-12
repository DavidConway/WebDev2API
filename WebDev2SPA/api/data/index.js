import express from 'express';
import { data } from './data';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
    res.send({ data: data });
});

router.post('/', (req, res) => {
    let newitem = req.body;
    if (newitem) {
        data.push({ imageUrl: newitem.imageUrl, itemName: newitem.itemName, options: newitem.options });
        res.status(201).send({ message: "item added Created" });
    } else {
        res.status(400).send({ message: "Unable to find option in request. No Contact Found in body" });
    }
});
export default router;