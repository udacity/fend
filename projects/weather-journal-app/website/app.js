/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) +'/'+ d.getDate()+'/'+ d.getFullYear();
let newTime = d.getHours()+':'+ d.getMinutes();



let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

let apiKey = '&APPID=bbee3673552ca695c2b8fa655569a66d';



document.getElementById('generate').addEventListener('click', performAction);

    function performAction(e){
        const newZip =  document.getElementById('zip').value;
        let zip = newZip + ',us';

        const feeling = document.getElementById('feelings').value;

        getEntry(baseURL, zip, apiKey)

        .then(function(data){

            postData('/add', {  temp: data.main.temp, 
                                desc: data.weather[0].description,
                                city: data.name,
                                feelings: feeling,
                                date: newDate,
                                time: newTime

                            }                                
                    );
          })
          .then(
            setTimeout(function(){
            updateUI()
    }, 2000)
          )
          
    }

//this works
const getEntry = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+key)
    try {
  
      const weatherInfo = await res.json();
      console.log(weatherInfo)
        
      return weatherInfo;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }

};



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
    return newData;
  }catch(error) {
  console.log("error", error)
  }
}



//get request is off timing. returning blank on first call while post returns first entry
const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      console.log(allData);
    


      for (let i = 0; i < allData.length; i++) {
    //     let end = allData.length;
 
    //     if (i === end) {
    //     //display date
    //         document.getElementById('date').innerHTML = 'On ' + revData[0].date + ' at ' + revData[0].time;

    //         document.getElementById('city').innerHTML = 'in ' + revData[0].city + ',';

    //         //convert and display temp
    //         const farTemp = (revData[0].temp - 273.15) * 9/5 + 32;
    //         const roundTemp = Math.round(farTemp);
    //         document.getElementById('temp').innerHTML = 'It was ' + roundTemp + '&deg with ';

    //         //display description
    //         document.getElementById('desc').innerHTML = revData[0].desc;

    //         document.getElementById('content').innerHTML = revData[0].feelings;
    //     }
    //   else{
       
            let oldEntry = document.createElement('div');
            let oldTitle = document.createElement('h3');
            let oldContent = document.createElement('p');

            oldEntry.setAttribute('class', 'prev-entry');

            oldTitle.setAttribute('class', 'prev-title');

            let farTemp = (allData[i].temp - 273.15) * 9/5 + 32;
            let roundTemp = Math.round(farTemp);
            oldTitle.innerHTML = allData[i].date + ' at ' + allData[i].time + ' -> It was ' + roundTemp + '&deg in ' + allData[i].city + ', with ' + allData[i].desc;

            document.getElementById('entry-logs').append(oldEntry);
            document.getElementById('entry-logs').append(oldTitle);
         
            oldContent.setAttribute('class', 'prev-content');
            oldContent.innerHTML = '<p>' + allData[i].feelings + '</p>';

            oldEntry.append(oldContent);

        }
    //  }
        return allData;
    }catch(error){
      console.log("error", error);
    }
  }
  
