const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app')


// Load environment variables from .env file
dotenv.config({ path: './config.env' });

// Database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection successful');
}).catch(err => {
    console.error('Database connection error:', err);
})




// Start the server
app.listen(3000, () =>{
    console.log('Server is running on http://localhost:3000');
})