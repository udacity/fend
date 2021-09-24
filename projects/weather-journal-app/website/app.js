// Personal API Key for OpenWeatherMap API
let baseURL = 'api.openweathermap.org/data/2.5/weather?q='
let apiKey = '0fec4ccc9410e0d124aa99dffb0bb979';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  // const fav =  document.getElementById('feelings').value;
  const zip =  document.getElementById('zip').value;
  const feelings =  document.getElementById('feelings').value;
// API call
  getWeather('/projectData')
  // New Syntax!
  .then(function(data){
      console.log(data)
      // Add data to POST request
      postData('/addWeather', {date: data.newDate, temp: data.temp, content:feelings} );
  })
  .then(
      updateUI()
    )
}

const getWeather = async (url)=>{
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
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;

  }catch(error){
    console.log("error", error);
  }
}

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
