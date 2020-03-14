
function getInfo(input) {
    const baseURL = 'https://api.aylien.com/api/v1/hashtags?language=en&input='
    console.log(input)
    const request = baseURL + input
    console.log(request)
    var aylien = require("aylien_textapi")
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    })
    const test = textapi.hashtags({
        url: input
    }, function(error,response) {
        if (error === null) {
            console.log(response)
        }
    })
    console.log(test)
}

/* API SDK
var textapi = new aylien({
application_id: process.env.API_ID,
application_key: process.env.API_KEY

Endpoint - 
https://api.aylien.com/api/v1
});
*/
export {getInfo}