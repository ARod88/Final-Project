require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('We did!');
    res.json({ "rugs": ["rugOne", "rugTwo", "rugThree"]}); 
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
