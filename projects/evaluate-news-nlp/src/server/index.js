var path = require('path');
const dotenv = require('dotenv');
const result = dotenv.config({encoding:'utf8'});


const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const bodyParser = require('body-parser');

console.log('result',result);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('dist'))
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
console.log(textapi);
console.log('application id',textapi._options.application_id);
console.log('application key',textapi._options.application_key);

textapi.entityLevelSentiment({'url': '=http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile'}, function(error, response) {
    if (error === null) {
        console.log(response);
    }else{
        console.log("error",error);
        console.log("response",response);
    }
    });

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


