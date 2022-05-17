/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
    /* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 8000;
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// POST route
app.post('/add', callBack);

function callBack(req, res) {
    res.send('POST received');
}

// POST an animal
const data = [];

// GET route
app.get('/all', sendData);

function sendData(req, res) {
    res.send(data);
};
app.post('/addAnimal', addAnimal);

function addAnimal(req, res) {
    newData = req.body
    newEntry = {
        temperature: newData.temperature,
        date: newData.date,
        res: newData.userResponse
    }

    data.push(newEntry);
    res.send(data);
    console.log(data)
}