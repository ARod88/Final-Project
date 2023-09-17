const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//connect to Mongo DB 
mongoose.connect('mongodb://localhost:27017/rugAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//schema

const rugSchema = new Schema({
    title: String,
    src: String,
    alt: String,
    description: String,
    price: String,
});

//model

const RugModel = mongoose.model('RugModel', rugSchema)


app.get('/', (req, res) => {
    console.log('We did!');
    res.json({ "rugs": ["rugOne", "rugTwo", "rugThree"]}); 
});

app.listen(port, () => {
    console.log("Server started on port ${port}");
});
