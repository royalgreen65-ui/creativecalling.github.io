const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// A simple test route
app.get('/', (req, res) => {
    res.send('Creative Calling API is running...');
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/prayer', require('./routes/prayer'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
