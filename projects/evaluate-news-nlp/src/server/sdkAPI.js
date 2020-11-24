function sdkGet(input) {
    let AYLIENTextAPI = require('aylien_textapi');
    let textapi = new AYLIENTextAPI({
      application_id: process.env.API_ID,
      application_key: process.env.API_KEY
    });

    const get = textapi.hashtags({
        'url': input
        }, function(error, response) {
        if (error === null) {
            console.log(response);
        }
    });
    console.log(get)
    return get

}