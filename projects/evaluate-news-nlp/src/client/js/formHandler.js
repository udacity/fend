async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (formText == "") {
        alert('Please enter text or a url to receive results')
        throw new Error('Empty input');
    }

    console.log("::: Form Submitted :::")
    var res = await Client.requestSentiment(formText)

    console.log(res)
    var stat = res.status
    if (stat == '0') {
        var txt = Client.formatText(res)
        document.getElementById('results').innerHTML = txt
    } else if (stat == '200') {
        alert("Please enter text or a url to receive results")
    } else {
        alert("Please enter a valid input to receive results")

    }

}

export {
    handleSubmit
}