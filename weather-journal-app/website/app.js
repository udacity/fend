import { key } from './api.js'

/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get request
const getData = async (url='') => {
  const request = await fetch(url);
  try{
    const data = await request.json();
    return data;
  } catch(err){
    console.log('error: ', err);
  }
};

// add click event
const generate = document.getElementById('generate');
generate.addEventListener('click', callback);

function callback() {
  const zip = document.getElementById('zip').value;
  const userResponse = document.getElementById('feelings').value;
  getData(baseUrl+zip+'&appid='+key)
  .then((data) => {
    postData('/add', {name: data.name, temp: data.main.temp, date: newDate, content: userResponse});
  })
  .then(() => updateUI())
}

// post request
const postData = async (url = '', data = {}) => {
  const params = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  };

  const res = await fetch(url, params);
  try {
    if (res.ok) {
      const newData = await res.json();
      return newData;
    }
  } catch(err) {
    console.log('error in post req: ', err);
  }
}

// update UI with the new data
const updateUI = () => {
  const name = document.getElementById('name');
  const date = document.getElementById('date');
  const temp = document.getElementById('temp');
  const content = document.getElementById('content');
  getData('/all')
  .then((data) => {
    name.textContent = 'Name: '+ data.name;
    date.textContent = 'Date: '+ data.date;
    temp.textContent = 'Temperature: ' + data.temp;
    content.textContent = 'Content: ' + data.content;
  })

}










