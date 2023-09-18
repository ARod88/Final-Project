const express = require('express');
require('./db/config')
const cors = require('cors');
// const bodyParser = require('body-parser');
const User = require('./db/User');
const app = express();

//middleware
app.use(express.json());
app.use(cors())

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result =  await user.save();
    res.send(req.body)
})

app.listen(5000)

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB (Make sure MongoDB is running locally)
// mongoose.connect('mongodb://localhost:27017/custom-rug-website', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define your routes here

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });