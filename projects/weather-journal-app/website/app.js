/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = 'nJRv2hgsznJjeVChCrnEO3BauboQpoTqa6GhtIHg';
const newAnimal =  document.getElementById('animal').value;