/* Global Variables */
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '26660429b6fea85fec7bc8d0b05f6555';

document.querySelector('#generate').addEventListener('click',generate);

function generate(evt){
    const zipcode = document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;
    getData(zipcode)
    .then((data)=>{
        postData('/addWeather',{temp:data.main.temp,content: data.weather[0].main, feeling: feeling});
    }).then(updateUI())

}

const getData = async (zipcode)=>{
    const url = baseUrl + zipcode + ',us&appid=' + apiKey;
    const res = await fetch(url);
    try{
        const data = await res.json();
        console.log("Data from API", data);
        return data;
    }catch (err){
        console.log(err);
    }
}

const postData = async (url='',data={})=>{
    console.log("Data before posting to server", data);
    const res = await fetch(url,{
        method :'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    try{
        const newData = await res.json();
        //console.log("New data in post",newData);
        return newData;
    }catch (err){
        console.log(err);
    }
};

const updateUI = async () => {
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    const request = await fetch('/all');
    
    try{
      const allData = await request.json();
      console.log('In update UI',allData);
      const lastIndex = Object.keys(allData).length - 1;
      const weatherContent = allData[lastIndex].content;
      document.getElementById('date').innerHTML = newDate;
      document.getElementById('temp').innerHTML = `Temperature : ${(allData[lastIndex].temp - 273).toPrecision(3)}`;
      document.getElementById('content').innerHTML = `Status ${weatherContent}, ${allData[lastIndex].feeling}`; 
      if(weatherContent =='Clouds'){
          const weatherpic = document.getElementById('weatherpic')
          weatherpic.src = './assets/cloudy.png';
      }else if(weatherContent == 'Clear'){
        const weatherpic = document.getElementById('weatherpic')
        weatherpic.src = './assets/clear.png';
        weatherpic.style.height = '276px';
        weatherpic.style.width = '422px';
      }
    }catch(error){
      console.log("error", error);
    }
  }
