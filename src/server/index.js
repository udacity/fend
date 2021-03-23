//Configure dotenv to be able to use environment variables found in the .env file at the root folder
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))



setTimeout(function(){ console.log(JSON.stringify(mockAPIResponse)) }, 5000);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(`Your License key is ${process.env.license_key}`);
})
