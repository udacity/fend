// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8006;
app.listen(port,()=>{console.log(`server listening to port ${port}`)});

let dataCount = -1;
//GET route 
app.get('/all',(req,res)=>{
    res.send(projectData);
});

//POST route
app.post('/addWeather',(req,res)=>{
    newEntry = {
        temp: req.body.temp,
        content: req.body.content,
        feeling: req.body.feeling,
    }
    dataCount += 1
    projectData[dataCount] = newEntry;
    //res.send(projectData);
    console.log("Server received weather data",projectData);
});

