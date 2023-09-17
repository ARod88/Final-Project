const express = require('express');
require('./db/config')
// const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();



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