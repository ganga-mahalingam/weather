const button=document.getElementById("button");
const weatherContent=document.getElementById("weathercontent");
const weather=document.getElementById("weather");
let count=0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        console.log(response);
        button.textContent="Next";
        weather.textContent="";
        console.log(response.data[count].country);
        weatherContent.textContent=response.data[count].country;
        setTimeout(function(){
             weather.textContent=response.data[count].weather_description;
            //  weather.textContent=response.data[count].temperature;
       },1500);
       count++;
    })
    .catch(function(error){
        console.log(error);
    })
};