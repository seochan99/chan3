const weather = document.querySelector(".js-weather");

const API_KEY = "d932ef89f1585a36bfea388c8e5e608f";

function getWeather(lat, lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response)
{
    return response.json()
}).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText=`${temperature}°C @ ${place}`;
})

}


function handleGeoSucces(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj = {
    latitude,
    longitude
};
saveCoords(coordsObj);
getWeather(latitude,longitude);
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("Cant Acces Geo Location")
}

const COORDS = 'coords';

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
     const loadedCoords = localStorage.getItem(COORDS);
     if(loadedCoords === null){
         askForCoords();
     }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
     }
}


function init(){
loadCoords();

}

init();