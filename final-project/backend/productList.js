// productList.js

const mongoose = require('mongoose');
const Product = require('./models/Product'); // Import your Product model

// Define an array of product objects to insert into the database
const productList = [
  {
    name: "Toad Rug",
    description: "Custom Toad Rug",
    price: 100,
    imageUrl: "./images/toadrug.jpg",
  },
  {
    name: "Viking Rug",
    description: "Custom Viking",
    price: 100,
    imageUrl: "./images/viking.jpg",
  },
  // Add more product objects as needed
];

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/custom-rug-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Insert products into the database
  Product.insertMany(productList)
    .then((insertedProducts) => {
      console.log('Data Inserted:', insertedProducts);
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
    })
    .finally(() => {
      // Close the MongoDB connection when done
      mongoose.connection.close();
    });
});
