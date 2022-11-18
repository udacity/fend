function handleSubmit(event) {
    event.preventDefault()
     // Grabs value/input of what user enters
    let formText = document.getElementById('name').value 
   
    Client.checkForName(formText)

    Client.textInput('http://localhost:8081/data', {formText})
   
    // Waits to update UI with fetched data until data is sent
   setTimeout(function() {
    updateUI(formText);
   }, 6000);
 
}

// Sends textInput to server side
const textInput = async(url='', data={}) => {
    console.log(data);
    const response = fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
        
    });

} 


// Async function to update UI with data
const updateUI = async(formText) => {
    const request = await fetch('http://localhost:8081/' + formText);
        try {
            const allData = await request.json();
            console.log(allData);
            document.getElementById('agreement').innerHTML = allData.agreement;
            document.getElementById('subjectivity').innerHTML = allData.subjectivity;
            document.getElementById('irony').innerHTML = allData.irony;
            document.getElementById('model').innerHTML = allData.model;
            document.getElementById('score-tag').innerHTML = allData.score_tag;
            document.getElementById('confidence').innerHTML = allData.confidence;
        }
        catch(error) {
            console.log('error', error);
        }
    
}



export { handleSubmit }
export {textInput}
export {updateUI}

