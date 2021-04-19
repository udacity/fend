const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var textapi = new MeaningCloud ({
    application_key: process.env.API_KEY
  });

const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()

app.use(express.static('dist'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(__dirname)

app.post('/test', (req, res) => {
    textapi.sentiment({
        'url': req.body.text
    }, function(error, response) {
        res.send(response);
    });
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
