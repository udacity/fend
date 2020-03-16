
function getInfo(input) {
    const baseURL = 'https://api.aylien.com/api/v1/hashtags?language=en&input='
    console.log(input)
    const request = baseURL + input
    console.log(request)

    const getting = async (url = '', data = {}) => {
        console.log('in getting')
        const receive = await fetch(request, {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'include',
            headers: {
                'X-AYLIEN-TextAPI-Application-Key': '35d5f8bfd2d18d0ac19c63195968b59e',
                'X-AYLIEN-TextAPI-Application-ID': '607aef20',
                'Content-Type': 'application/json',
            },
            })
        try {
            const APIdata = await receive.json()
            console.log(APIdata)
            return APIdata
        } catch(error) {
            console.log('error', error)
        }
    }
    const boop = getting()
    console.log(boop)
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
    console.log(test)
    */
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