/* Global Variables */

// Personal API Key for OpenWeatherMap API
let baseURL = 'https://api.nasa.gov/planetary/apod?api_key='
let apiKey = 'nJRv2hgsznJjeVChCrnEO3BauboQpoTqa6GhtIHg';
// const newAnimal =  document.getElementById('feelings').value;

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    // const fav =  document.getElementById('feelings').value;
    const animal =  document.getElementById('zip').value;
    const fav =  document.getElementById('feelings').value;
// API call
    getAnimal('/fakeAnimalData')
    // New Syntax!
    .then(function(data){
        console.log(data)
        // Add data to POST request
        postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:fav} );
    })
    .then(
        updateUI()
      )
}

const getAnimal = async (url)=>{
  const res = await fetch(url);
  try {
// Transform into JSON
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// Async POST
const postData = async ( url = '', data = {})=>{

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
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData[0].animal;
      document.getElementById('temp').innerHTML = allData[0].facts;
      document.getElementById('content').innerHTML = allData[0].fav;
  
    }catch(error){
      console.log("error", error);
    }
  }

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
