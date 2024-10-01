require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const methodOverride = require('method-override'); // Add method-override

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use methodOverride to enable HTTP verbs like PUT, PATCH, DELETE in forms
app.use(methodOverride('_method')); // Add this line

// Connect to the database
connectDB();

app.use(express.static('public'));
//to upload the image
app.use('/uploads', express.static(path.join(__dirname,'public/uploads')));


// Using layouts and ejs
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/mobile'));

// Default route for 404
app.get('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
