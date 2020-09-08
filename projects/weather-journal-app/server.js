// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Require Express to run server and routes
const express = require('express');

// Dependencies
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;
const server = app.listen(port, () => {
    console.log('sever started');
    console.log(`running on localhost: ${port}`);
});

// Post Route
const data = [];
app.post('/add', (req, res) => {
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        feelings: req.body.content,
    };

    projectData.push(newEntry);
    console.log(projectData);
    res.status(204).end()
});

// Callback function to complete GET '/all'
app.get('/all', (req, res) => {
    res.send(projectData);
});

