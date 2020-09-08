// OpenWeatherMap API
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = '&appid=077ccff7e77db9e6ea5ee2eca04874ef';

//Get the date
let d = new Date();
let newDate = d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

// Get Inputs and call getWeather
document.getElementById('generate').addEventListener('click', (e) => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(zipCode, feelings);
});

// getWeather Function
const getWeather = async (zip, feelings) => {
    // Fetch the Response
    const resp = await fetch(`${BASE_URL}${zip}${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            return postData('/add', {
                date: newDate,
                temp: data.main.temp,
                content: feelings
            })
        })
        .then(() => fetch('/all'))
        .then(response => {
            let responseJSON = response.json();
            console.log(responseJSON);
            return responseJSON;
        })
        .then(allData => {
            const data = allData[allData.length - 1];
            document.getElementById('date').innerHTML = data.date;
            document.getElementById('temp').innerHTML = data.temp;
            document.getElementById('content').innerHTML = data.feelings;
        });
}

// postData Function

const postData = async (url = '', data = {}) => {
    return await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}