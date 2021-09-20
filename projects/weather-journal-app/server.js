// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')
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

// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) })
// Callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`)
};

// Create JS object
const fakeData = {
    animal: 'Lion',
    fact: 'Lions are fun'
    // userResponse: 'TestData'
}

// GET route
app.get('/fakeAnimalData', getFakeData)

function getFakeData (req, res) {
  res.send(fakeData);
};

const animalData = [];

app.get('/all', getData)

function getData(req, res){
    res.send(animalData)
    console.log(animalData)
}

// POST route
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){
console.log(req.body)
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  res.send(animalData)
  console.log(animalData)
}


// app.post('/date', addDate);

// function addDate (req,res){
//     data.push(req.body);
// };
