function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    const getData = async () => {
        const res = await fetch(`http://localhost:3001/api?input=${formText}`);
    }
//    try 

/*    fetch('http://localhost:3001/test')
    .then(res => res.json())
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    }) */

}

export { handleSubmit }
