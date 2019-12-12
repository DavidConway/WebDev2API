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
    var item = new Items(req.body);
    item.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });
});

//get a given post
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        const items = await Items.find({ 'itemName': id });
        console.log(items);
        res.status(200).json(items);
    } catch (error) {
        handleError(res, error.message);
    }
});

//delete item
router.delete('/:id', asyncHandler(async (req, res) => {
    const item = await Items.findOneAndDelete({'itemName': req.params.id });
    if (!item) return res.send(404);
    await item.remove();
    return res.status(204).send(item);
}));

function handleError(res, err) {
    return res.send(500, err);
};

export default router;

