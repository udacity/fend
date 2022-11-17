

const fetch = require('node-fetch');


const dotenv = require('dotenv');
dotenv.config();



const apiKey = process.env.API_KEY;
const lang = "&lang=auto"
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";






var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
var cors = require('cors');
//const { JavascriptModulesPlugin } = require('webpack');


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

// formText (user url input) is posted to data array as element 0
app.post('/data', function(req,res) {
    data.unshift(req.body);
    console.log(data);
    

    // API data is fetched using the element 0 of array as the url input/builds url to fetch data
    const getAPI = async(url,key,txt,lang)=> {
        const res = await fetch(url+key+txt+lang)
        try {
            const apiData = await res.json();
            //Sends fetched apiData to /all so that it can be accessed
            app.get('/all', function(req,res) {
                
                res.send(apiData);
                console.log('sending data')
            })
            
            console.log("Now i am going to log the data:")
            console.log(apiData)
            console.log("\n-----------\n")

            return apiData;
            }
            catch(error) {
                console.log('error', error);
            }
                
    }
  getAPI(baseURL, apiKey, data[0].formText, lang);
  
})

















   
  






   







































