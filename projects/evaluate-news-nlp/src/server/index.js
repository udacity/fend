const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi")

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
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
