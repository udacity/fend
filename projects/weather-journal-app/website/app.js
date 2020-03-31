//import { response } from "express";

/* Global Variables */

const APIkey = '8cb231604e5cf6793e2c897a9e3bce6b';
const APIbase = 'http://api.openweathermap.org/data/2.5/weather';
// API call template: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8cb231604e5cf6793e2c897a9e3bce6b


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Listener for form submit
document.getElementById('generate').addEventListener('click', actions);


function actions() {
    postIt()
    .then(updateUI)
}


// Get data from API
const getAPI = async (zip) => {
    const openWeather = await fetch(`${APIbase}?zip=${zip}&units=imperial&APPID=${APIkey}`, {
        body: JSON.stringify(),
    });

    try {
        const weather = await openWeather.json();
        const temp = weather.main.temp;
        return temp;
    } catch(error) {
        console.log('error', error);
    };
};

// POST data

const postData = async (url = '', data = {}) => {
    const response = await fetch (url, {
        method:'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newEntry = await response.json();
        return newEntry;
    } catch(error) {
        console.log('error', error);
    };
};

const postIt = async() => {
    let zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;
    let gatherData = await getAPI(zip);
    postData('/add', {zip:zip, feelings:feelings, date:newDate, weather:gatherData});
};

// GET full data
const getFullData = async() => {
    const reqFull = await fetch('/all');
    try {
        const fullJson = await reqFull.json();
        return fullJson;
    } catch(error) {
        console.log('error', error);
    };
};

// Use full data to update UI
const updateUI = async () => {
    const everything = await getFullData();
    try {
        // change UI
        document.getElementById('date').innerHTML = `Date: ${everything[everything.length - 1].date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${everything[everything.length - 1].weather}`;
        document.getElementById('content').innerHTML = `Feelings: ${everything[everything.length - 1].feelings}`;
    } catch(error) {
        console.log('error', error);
    };
};