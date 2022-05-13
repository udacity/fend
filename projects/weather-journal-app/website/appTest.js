// Async POST
const postData = async(url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

// TODO-Async GET
// const data = asyn (url = '') => {
//     const request= await fetch (url);
//     try {
//         const allData = await request.json();
//         return allData;
//     } catch(error) {
//         console.log('error': error)
//     }
// }

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const newAnimal = document.getElementById('zip').value;
    const favFact = document.getElementById('feelings').value;

    postData('/add', { answer: 42 })
        // New Syntax!
        .then(function(data) {
            // Add data
            console.log(data);
            postData('/addAnimal', { animal: data.animal, fact: data.fact, fav: favFact });
        })
        .then(
            updateUI()
        )
}

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = allData[0].animal;
        document.getElementById('date').innerHTML = allData[0].facts;
        document.getElementById('content').innerHTML = allData[0].fav;

    } catch (error) {
        console.log("error", error);
    }
}