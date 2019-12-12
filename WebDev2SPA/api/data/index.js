import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router(); // eslint-disable-line

/*router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getPost(id);

    if (post) {
        return res.status(200).send(post);
    }
    return res.status(404).send({ message: `Unable to find Post ${id}` });
});*/

router.get('/', (req, res) => {
    const items = stubAPI.getAll();
    res.send({ items: items });
});


export default router;
