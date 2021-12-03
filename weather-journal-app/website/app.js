import { key } from './api.js'

/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async (url='') => {
  const request = await fetch(url);
  try{
    const data = await request.json();
    return data;
  } catch(err){
    console.log('error: ', err);
  }
};

const generate = document.getElementById('generate');
generate.addEventListener('click', callback);

function callback() {
  const zip = document.getElementById('zip').value;
  const userResponse = document.getElementById('feelings').value;
  getData(baseUrl+zip+'&appid='+key)
  .then((data) => {
    postData('/add', {temp: data.main.temp, date: newDate, content: userResponse});
  })
  .then(() => updateUI())
}

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

const updateUI =  () => {
  const date = document.getElementById('date');
  const temp = document.getElementById('temp');
  const content = document.getElementById('content');
  getData('/all')
  .then((data) => {
    date.textContent = data.date;
    temp.textContent = data.temp;
    content.textContent = data.content;
  })

}










