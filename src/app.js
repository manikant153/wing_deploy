require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db'); // Updated path to connectDB
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use methodOverride to enable HTTP verbs like PUT, PATCH, DELETE in forms
app.use(methodOverride('_method')); // Add this line

// Connect to the database
connectDB();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public'))); // Updated path to serve static files

// To upload the image
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads'))); // Updated path

// Using layouts and ejs
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index')); // Updated path for routes
app.use('/', require('./server/routes/dashboard')); // Updated path for routes
app.use('/', require('./server/routes/mobile')); // Updated path for routes

// Default route for 404
app.get('*', function (req, res) {
    res.status(404).render('404');
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));
