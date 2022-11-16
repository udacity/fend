

const dotenv = require('dotenv');
dotenv.config();



const apiKey = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";





var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
var cors = require('cors')


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



let data = []
app.post('/data', function(req,res) {
    data.push(req.body);
    console.log(data);
})

app.get('/data', function(req,res) {
    res.send(data);
})



































