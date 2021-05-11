const dotenv = require('dotenv');
const fetch = require('node-fetch');
var FormData = require('form-data');
dotenv.config();
async function request_sentiment(sentence) {
    // get the sentence and return the sentiment or error
    console.log(10)
    console.log(process.env.API_KEY)
    console.log(sentence)
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", sentence);
    formdata.append("lang", "auto"); // 2-letter code, like en es fr ...
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
    

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(({
            status,
            body
        }) => {console.log(status, body)
                return body})
        .catch(error => {console.log('error', error)
                        return error});

        return response
    
}

module.exports = request_sentiment