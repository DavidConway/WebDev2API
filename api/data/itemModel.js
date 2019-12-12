import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
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