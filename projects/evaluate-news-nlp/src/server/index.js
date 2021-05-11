var path = require('path')
const express = require('express')
var cors = require('cors')

const request_sentiment = require('./meaningcloud.js')
const bodyParser = require('body-parser');

const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
    origin: 'http://localhost:8082',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
console.log(corsOptions)
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('dist/index.html'))
})
app.get('/test', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/sentiment', async function (req, res) {
    console.log(req.body)
    console.log('sentimeeeent')
    var sentence = req.body.sentence
    console.log(sentence)
    var response = await request_sentiment(sentence)
    console.log('res')
    console.log(response)
    if (response.status.code == '0'){
    res.send(
        JSON.stringify({
            status : response.status.code,
            irony: response.irony,
            subjectivity:response.subjectivity,
            agreement:response.agreement
        })
    )
    }else{
        res.send(JSON.stringify({
            status : response.status.code,
            message: "invalid input"
        }))
    }

})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('NLP app listening on port 8081!')
})