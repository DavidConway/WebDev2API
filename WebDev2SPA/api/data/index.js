import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router(); // eslint-disable-line
/*


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

router.delete('/:id', (req, res) => {
    const key = req.params.id;
    const index = data.map((item) => {
        return item.itemName;
    }).indexOf(key);
    if (index > -1) {
        data.splice(index, 1);
        res.status(200).send({ message: `Deleted item: ${key}.` });
    } else {
        res.status(400).send({ message: `Unable to find item: ${key}.` });
    }
});
*/

//get all
router.get('/', (req, res) => {
    const items = stubAPI.getAll();
    res.send({ items: items });
});

//add post
router.post('/', (req, res) => {
    let newitem = req.body;
    if (newitem && stubAPI.add(newitem.imageUrl, newitem.itemName, newitem.options)) {
        res.status(201).send({ message: "item added Created" });
    } else {
        res.status(400).send({ message: "Unable to find item data in request or item whith that name alredy exists." });
    }
});

//get a given post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = stubAPI.find(id);

    if (item) {
        return res.status(200).send(item);
    }
    return res.status(404).send({ message: `Unable to find Post ${id}` });
});

//delete item
router.delete('/:id', (req, res) => {
    const key = req.params.id;
    const item = stubAPI.find(key);
    if (item) {
        stubAPI.delete(key)
        res.status(200).send({ message: `Deleted item: ${key}.` });
    } else {
        res.status(400).send({ message: `Unable to find item: ${key}.` });
    }
});

export default router;
