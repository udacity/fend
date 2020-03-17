const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi")

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
   //  res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

app.get('/api', function (req, res) {
    textapi.hashtags({
        url: req
        }, function(error, response) {
            if (error === null) {
                console.log(response.hashtags);
                res.send(response.hashtags)
            }
    });
})

/*
textapi.hashtags({
    url: 'http://www.bbc.com/sport/0/football/25912393'
    }, function(error, response) {
        if (error === null) {
          console.log(response.hashtags);
        }
});
*/
