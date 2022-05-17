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


// Data array to store and retrieve data data
const data = []
    // Callback function to complete GET '/all'
app.get('/all', sendData);

function sendData(req, res) {
    res.send(data);
};
// Post Route
app.post('/addInfo', addInfo);

function addInfo(req, res) {
    newData = req.body;
    newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        res: newData.feel
    };

    data.push(newEntry);
    // res.send(data);
    console.log(data);
}