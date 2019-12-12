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

router.put('/:id', (req, res) => {
    const key = req.params.id;
    const updateitem = req.body;
    const index = data.map((item) => {
        return item.itemName;
    }).indexOf(key);
    if (index !== -1) {
        data.splice(index, 1, {
            name: updateitem.imageUrl, itemName: updateitem.itemName, options: updateitem.options
        });
        res.status(200).send({ message: 'item Updated' });
    } else {
        res.status(400).send({ message: 'Unable to find item in request. No item Found in body' });
    }
});
export default router;