
function getInfo(input) {
    const baseURL = 'https://api.aylien.com/api/v1/hashtags?language=en&input='
    console.log(input)
    const request = ``
    console.log(request)

    const APIget = async () => {
        const receive = await fetch(request, {
            method: 'GET',
            headers: {
                'X-AYLIEN-TextAPI-Application-Key': process.env.API_ID,
                'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        try {
            const dataString = await receive.json()
            return dataString
        } catch(error) {
            console.log('error', error)
        }
    }
        
/*
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
    */
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