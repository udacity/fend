// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 9000;
const server = app.listen(port, () => {
    console.log(`Server is on port ${port}`);
});


// Get route
app.get('/all', (req, res) => {
    res.send(projectData);
});

// Post route
// Adding a new entry

app.post('/add', (req, res) => {
    let x = req.body;
    console.log(x);
    newEntry = {
        date: x.date,
        feelings: x.feelings,
        zip: x.zip,
        weather: x.weather
    }
    projectData.push(newEntry);
//    res.send('POST RECEIVED');
});


