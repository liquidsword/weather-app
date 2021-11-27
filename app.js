// const { positional } = require("yargs");

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let locationIcon = document.querySelector('.weather-icon');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const {icon} = data.weather[0];

            const api = `http://api.weatherapi.com/v1/forecast.json?key=876a1e7e0f464a0eac9213645210811&q=New York&days=1&aqi=no&alerts=no`;
        
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp_f, condition } = data.current;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temp_f;
                temperatureDescription.textContent = condition.text;
                locationTimezone.textContent = data.location.region;
                icon.textContent = condition.icon;
                //Set Icon
                    setIcons(icon, document.querySelector(".icon"))
            });
        });
        
    }
});