import express from 'express';
import Items from './itemModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


//get all
router.get('/', async (req, res) => {
    try {
        const items = await Items.find();
        res.status(200).send(items);
    } catch (error) {
        handleError(res, error.message);
    }
});

//add post
router.post('/', async (req, res) => {
    console.log(req.body);
    router.post('/', asyncHandler(async (req, res) => {
        const items = await Items.create(req.body);
        res.status(201).json(items);
    }));
});

//get a given post
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const items = await Items.find({ 'itemName': id });
        res.status(200).json(items);
    } catch (error) {
        handleError(res, error.message);
    }
});

//delete item
router.delete('/:id', asyncHandler(async (req, res) => {
    const item = await Items.findOneAndDelete({'itemName': req.params.id });
    console.log("test", item);
    if (!item) return res.send(404);
    await item.remove();
    return res.status(204).send(item);
}));

function handleError(res, err) {
    return res.send(500, err);
};

export default router;

