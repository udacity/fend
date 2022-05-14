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

// app.post('/animal', addAnimal);
// app.post('/addMovie', addMovie)

// function addMovie(req, res) {
//     data.push(req.body);
//     console.log(req.body)
// }
app.post('/addAnimal', addAnimal);

function addAnimal(req, res) {

    newEntry = {
        temperature: req.body.animal,
        date: req.body.fact,
        reponse: req.body.fav
    }

    data.push(newEntry)
    console.log(data)
}


// GET route
app.get('/all', sendData);

function sendData(req, res) {
    res.send(data);
    console.log(data);
};