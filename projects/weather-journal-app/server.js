// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


const bodyParser = require('body-parser');
/* Middleware*/
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
const server = app.listen(port, listening)

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}


//GET route

app.get('/getProjectData', function (req, res) {

    res.send(projectData);
  })



const weatherData = [];

//get request is off timing. returning blank on first call while post returns first entry
  app.get('/all', getData) 
  function getData (req, res){
    res.send(weatherData);
    console.log(weatherData);
  }


  //post route adds entry - worls

app.post('/add', addEntry);

  function addEntry(req,res){
//   console.log(req.body);
    newEntry = {
      temp: req.body.temp,
      desc: req.body.desc,
      city: req.body.city,
      feelings: req.body.feelings,
      date: req.body.date,
      time: req.body.time
    }
  
    weatherData.push(newEntry);
    res.send(weatherData)
    // console.log(weatherData);
  }

