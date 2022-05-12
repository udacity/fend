// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const req = require('express/lib/request');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

// TODO-Spin up the server
const server = app.listen(port, listening);

function listening() {
    console.log('running server');
    console.log(`running on localhost: ${port}`);
};

// Callback to debug

// Initialize all route with a callback function
app.get('/all', callBack);
// Callback function to complete GET '/all'
function callBack(req, res) {
    res.send(projectData)
}

// Post Route
app.post('/add', function(req, res) {
    let newData = req.body;
    let newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        userResponse: newData.userResponse
    }
    projectData.push(newEntry)
})