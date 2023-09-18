const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String
});

module.exports = mongoose.model("products", userSchema);