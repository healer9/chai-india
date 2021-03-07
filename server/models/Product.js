const mongoose = require('mongoose');

// (id, name, stock, description, cost_price, selling_price)
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the name"]
    },
    stock: {
        type: Number,
        required: [true, "Please provide the stock"]
    },
    description: {
        type: String,
        required: [true, "Please provide the description"]
    },
    cost_price: {
        type: Number,
        required: [true, "Please provide the cost price"]
    },
    selling_price: {
        type: Number,
        required: [true, "Please provide the selling price"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;