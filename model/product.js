const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String
});

module.exports = mongoose.model("Product", productSchema);