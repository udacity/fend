// const { header } = require("express/lib/request");

/* Global Variables */
// const url = 'https://openweathermap.org/';
const url = 'http://api.animalinfo.org/data/?animal='
const key = '&appid=9f15e45060...';
// const key = 'AIzaSyCnCWYDaa9mKdg6qrzKF7E9HNK_9BHyO7E';


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
    const zip = document.querySelector('#zip').value
    getZip(url, zip, key)
}
const getZip = async(url, zip, key) => {
        const res = await fetch(url + zip + key)

        try {
            const newData = await res.json();
            console.log(newData);
            return newData
        } catch (error) {
            console.log('error', error);
        }
    }
    /* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();