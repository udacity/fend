const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

const app = express()

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

// API Credentials
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
const port = 8081;
let url = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/api', async function(req, res) {
    url = req.body.url;
    const api_URL = `${BASE_API_URL}key=${apiKey}&url=${url}&lang=en`
    const response = await fetch(api_URL)
    const data = await response.json()
    res.send(data)
})

// designates what port the app will listen to for incoming requests

module.exports = app.listen(port, function() {
    console.log(`Example app listening on localhost: ${port}`)
})
