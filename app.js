// const { positional } = require("yargs");

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherapi.com/v1/forecast.json?key=876a1e7e0f464a0eac9213645210811&q=New York&days=1&aqi=no&alerts=no`;
        
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_f, } = data.current;
            });
        });
        
    }
});