// const { header } = require("express/lib/request");

/* Global Variables */
const url = 'https://openweathermap.org/';
// const key = '&appid=9f15e45060...';
const key = 'AIzaSyCnCWYDaa9mKdg6qrzKF7E9HNK_9BHyO7E';


// Personal API Key for OpenWeatherMap API
const retrieveData = async(url, data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application.json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', callBack)
    /* Function called by event listener */
function callBack(e) {
    const zip = document.querySelector('#zip').value;
    const feelings = document.querySelector('#feelings').value
    getZip(url, zip, key)
        // New Syntax!
        .then(function(data) {
            // Add data
            console.log(data);
            postData('/add', { temperature: data.temperature, date: data.date, userResponse: data.userResponse });
        })
        .then(
            updateUI()
        )
}

const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('content').innerHTML = allData[0].userResponse;

    } catch (error) {
        console.log("error", error);
    }
}
const getZip = async(url, zip, key) => {
        const res = await fetch(url + zip + key);

        try {
            const newData = await res.json();
            console.log(newData);
            return newData
        } catch (error) {
            console.log('error', error);
        }
    }
    /* Function to GET Web API Data*/
const getData = async(url = '', data = {}) => {
        console.log(data);
        const response = await fetch(url, {})
    }
    /* Function to POST data */


/* Function to GET Project Data */

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();