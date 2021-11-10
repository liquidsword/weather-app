// const { positional } = require("yargs");

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    // let icon = document.querySelector(".icon");

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
                const {temp_f, condition, icon } = data.current;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temp_f;
                temperatureDescription.textContent = condition.text;
                locationTimezone.textContent = data.location.region;
                // icon.textContent = condition.icon;
            });
        });
        
    }
    function setIcons(icon, iconID){
        const skycons = new skycons({color: "blue"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID), Skycons(currentIcon);
    }
});