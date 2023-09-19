require('./config')
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const User = require('./models/User');
const Product = require('./models/Product')
const app = express();
const path = require('path')

app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend app
  methods: 'GET,POST', // Add other HTTP methods as needed
  allowedHeaders: 'Content-Type,Authorization', // Add other headers as needed
}));

//middleware
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

//register new user

app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Generate a salt (a random string) for password hashing
    const saltRounds = 10; // You can adjust the number of rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const user = new User({
      name,
      email,
      password: hashedPassword, // Store the hashed password in the database
    });

    const result = await user.save();
    result.toObject();
    delete result.password;
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

//login a user

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // If no user found, return a 404 response
    if (!user) {
      return res.status(404).json({ error: 'No user found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Password is invalid; return a 401 response
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Password is valid; send back the user (excluding the password)
    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});





  app.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.post('/api/products', async (req, res) => {
    try {
      const newProduct = new Product(req.body); // Assuming req.body contains product data
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
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