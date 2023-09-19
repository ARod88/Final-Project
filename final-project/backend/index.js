const express = require('express');
const cors = require('cors');
require('./config')
// const bodyParser = require('body-parser');
const User = require('./models/User');
const Product = require('./models/Product')
const app = express();

//middleware
app.use(express.json());
app.use(cors())

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result =  await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
})

app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
      let user = await User.findOne({ email: req.body.email }).select('-password');
      if (user) {
        res.send(user);
      } else {
        res.send({ 'result': 'No user found' });
      }
    } else {
      res.send({ 'result': 'Missing email or password' });
    }
  });

  app.post("/Gallery", async (req, res) => {
    try {
      const product = new product(req.body); // Assuming req.body contains product data
      const result = await product.find();
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
  

//   app.get('/api/product', async (req, res) => {
//     try {
//       const products = await Products.find(); // Fetch all products from the database
//       res.json(products);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  
  

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