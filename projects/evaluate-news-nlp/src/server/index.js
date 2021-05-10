var path = require('path')
const express = require('express')
var cors = require('cors')

const meaningcloud = require('./meaningcloud.js')

const app = express()

app.use(express.static('dist'))

var corsOptions = {
    origin: 'http://localhost:8082',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE" ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test',cors(corsOptions) ,function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/sentiment',cors(corsOptions) ,function (req, res) {
    var sentence = req.body
    var response = meaningcloud.request_sentiment(sentence)
    res.send({
        'message':response
    })

})