function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    if (Client.validateURL(formText)) {
        document.getElementById('spinner').style.display = 'block';
        fetch('http://localhost:8081/api', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            document.getElementById('spinner').style.display = 'none';
        }).catch(function() {
            console.log("error");
            document.getElementById('spinner').style.display = 'none';

        })
    }else{
        alert('Please try with a valid URL!');
    }
}



export { handleSubmit }
