// Setup empty JS object to act as endpoint for all routes
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Spin up the server
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost: ${port}`);
};

// Callback function to complete GET '/all'
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
    console.log(projectData)
};
// Post Route
app.post('/addData', addData);

function addData(req, res) {
    newData = req.body;
    projectData['temperature'] = newData.temperature;
    projectData['date'] = newData.date;
    projectData['res'] = newData.feel;
    res.send(projectData);
    console.log('This is your data retrieved' + projectData);
}