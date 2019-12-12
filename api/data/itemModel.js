import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    imageUrl: String,
    itemName: String,
    options: [
        {
            link: {
                url: String,
                text: String
            },
            price: {
                type: Number,
                min: 0
            }
        },
        {
            link: {
                url: String,
                text: String
            },
            price: {
                type: Number,
                min: 0
            }
        },
        {
            link: {
                url: String,
                text: String
            },
            price: {
                type: Number,
                min: 0
            }
        }
    ]
});

export default mongoose.model('item', itemSchema);