//let innerText = document.getElementById('name').innerText;

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value 
    // check what text was put into the form field

    //Gets the value of what is entered in the text box
    Client.checkForName(formText)

   
   /*console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) */

   
    
    
    /* .then(function(data) {
        console.log(data);
        postData('/add', {wind:data.wind});
        updateUI();
    })*/
    
    

    Client.textInput('http://localhost:8081/data', {formText})
    //.then(() =>
   // Client.updateUI()
   // )

   setTimeout(function() {
    updateUI();
   }, 6000);
    
   /*fetch('http://localhost:8081/all')
    .then(res=> res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.agreement
    })*/ 
   
   
}








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


const updateUI = async() => {
    
    const request = await fetch('http://localhost:8081/all');
    
    
    console.log(request);
    
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

