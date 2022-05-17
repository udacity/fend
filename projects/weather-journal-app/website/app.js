// Api url for Open weather map
const url = 'https://api.openweathermap.org/data/2.5/weather?id=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=cb2eeafd3fb2f4ce0b2db2232ed72f9b';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const zip = document.getElementById('zip').value;
    const response = document.getElementById('feelings').value;
    getZip(url, zip, apiKey)
        .then(function(data) {
            // Add data
            console.log(data);
            postData('/addInfo', { temperature: data.main.temp, date: data.dt, feel: response });
        })
        .then(updateUI())
};

/* Function to GET Web API Data*/
const getZip = async(url, zip, key) => {
        const res = await fetch(url + zip + key);

        try {
            const newData = await res.json();
            return newData
        } catch (error) {
            console.log('error', error);
        }
    }
    /* Function to POST data */
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

/* Function to Update UI */
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = Math.round(allData[0].temperature) + 'degrees';
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('content').innerHTML = allData[0].res

    } catch (error) {
        console.log("error", error);
    }
}