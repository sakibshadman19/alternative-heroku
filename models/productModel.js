const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        description:{
            type: String,
            required:[true, "Please enter Description"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Please enter price"]
        },
        image: {
            type: String,
            required: [true, "Please enter an image"]
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;