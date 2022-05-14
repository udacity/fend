// let url = 'http://api.animalinfo.org/data/?animal='
const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=';
const key = '&appid=cb2eeafd3fb2f4ce0b2db2232ed72f9b'

// Async POST
const postData = async(url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}


// TODO-Async GET
// const retrieveData = async(url = '') => {
//     const request = await fetch(url);
//     try {
//         const allData = await request.json();
//         return allData;
//     } catch (error) {
//         console.log("error", error);
//     }
// }

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const zip = document.getElementById('zip').value;
    const response = document.getElementById('feelings').value;
    getZip(url, zip, key)
        .then(function(data) {
            // Add data
            console.log(data);
            postData('/addAnimal', { temp: 'data.temperature', date: 'data.date', Response: response });
        })
        .then(
            updateUI()
        )
}

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        console.log(allData)
        document.querySelector('#temp').innerHTML = allData[0].temp;
        document.querySelector('#date').innerHTML = allData[0].date;
        document.querySelector('#content').innerHTML = allData[0].Response;
        return allData
    } catch (error) {
        console.log("error", error);
    }
}
const getZip = async(url, zip, key) => {
    const res = await fetch(url + zip + key);

    try {
        const newData = await res.json();
        return newData
    } catch (error) {
        console.log('error', error);
    }
}