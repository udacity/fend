function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    

    console.log("::: Form Submitted :::")
    var request_body = {'sentence':formText}
    fetch('http://localhost:8081/sentiment',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost'
        },
        body: JSON.stringify(request_body),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
