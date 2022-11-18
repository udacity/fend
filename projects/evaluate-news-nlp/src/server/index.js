const fetch = require('node-fetch');

const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;
const lang = "&lang=auto"
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Array that holds the user url input (formText)
let data = []

// Posts user url input (formText) to the data array as element 0 
app.post('/data', function(req,res) {
    data.unshift(req.body);
    console.log(data);
    
    
    //API data is fetched
    //Parameters are url (baseURL), key (apiKey), txt(url that user inputs/formText), and lang(language (auto))
    //URL is built to fetch data
    const getAPI = async(url,key,txt,lang)=> {
        const res = await fetch(url+key+txt+lang)
        try {
            
            const apiData = await res.json();
            // Sends fetched apiData to custom url so that it can be accessed
            // Example: if user puts in google.com to be analyzed, that data will be sent to localhost:8081/google.com
            app.get('/'+txt, function(req,res) {
                res.send(apiData);
            })
            }
            catch(error) {
                console.log('error', error);
            }   
    }
  getAPI(baseURL, apiKey, data[0].formText, lang);
})






  






   







































