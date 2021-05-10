const dotenv = require('dotenv');
async function request_sentiment(sentence) {
    // get the sentence and return the sentiment or error
    request_body = {
        'key': process.env.API_KEY,
        'lang': 'auto',
        'txt': sentence
    }

    response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request_body),
        }).then(res => res.json())
        .then(res => function () {

            if (res['status']['msg'] === 'OK') {
                return res['sentence_list'][0]['segment_list'][0]['text']

            } else {
                console.error('Error:', res);
                return -1
            }

        })
        .catch((error) => {
            console.error('Error:', error);
            return -1
        });
    if (response != -1) {
        return response
    } else {
        return{
            'status': 'not OK',
            'message': 'this is a message',
            'time': 'now'
        }
    }
}

module.exports = request_sentiment