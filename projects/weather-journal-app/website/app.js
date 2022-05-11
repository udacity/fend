const { header } = require("express/lib/request");

/* Global Variables */
const url = 'https://openweathermap.org/';

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

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */

// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();