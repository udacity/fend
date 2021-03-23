function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlLink = document.getElementById('urlLink').value 
    let summarySize = document.getElementById('summarySize').value
    //Check if the URL provided is valid
    
    if (Client.validURL(urlLink) == true) {
    fetch('http://localhost:8081/makeSummary', {
        method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
        body: JSON.stringify({urlLink: urlLink, summarySize: summarySize}),
    })

    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('results').innerHTML = data.summary
    })
    } else {
        alert('URL entered is not correct. Please make sure you enter a valid URL');
    }
}



export { handleSubmit }
