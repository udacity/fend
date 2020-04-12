var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: "3fbdfac2",
    application_key: "f860afed185aa4a5faccca55a5a3cae5"
  });

const app = express()

app.use(express.static('dist'))

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
