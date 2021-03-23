function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlLink = document.getElementById('urlLink').value 
    let summarySize = document.getElementById('summarySize').value
    //Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    
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
}

export { handleSubmit }
