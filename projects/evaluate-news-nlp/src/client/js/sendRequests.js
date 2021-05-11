async function requestSentiment(formText){
    var request_body = {'sentence':formText}
    var response = await fetch('http://localhost:8081/sentiment',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request_body),
    })
    .then(res => {return res.json()})
    return response
}
export { requestSentiment }
