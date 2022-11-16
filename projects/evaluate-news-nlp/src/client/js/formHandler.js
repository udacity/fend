let innerText = document.getElementById('name').innerText;

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value 
    // check what text was put into the form field

    //Gets the value of what is entered in the text box
    Client.checkForName(formText)

   
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) 

    textInput('http://localhost:8081/data', {formText})
    
    
}




const textInput = async(url='', data={}) => {
    console.log(data);
    const input = fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
        
    });

} 




export { handleSubmit }
