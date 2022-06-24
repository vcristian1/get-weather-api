const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast")
const currentTempEl = document.getElementById("current-temp");
const currentTime = document.getElementById("currentTime")

const API_KEY = "c1de2844203cf24f49b020d8371a1299"

setInterval(() => {
    displayAllTimes();
}, 1000)

function displayAllTimes () {
    $("#currentTime").html(moment().format('LT'));
    $("#currentDate").html(moment().format('LL'));
    $("#day").html(moment().format('dddd'));
    $("#secondday").html(moment().add(1, 'days').calendar());
    $("#thirdday").html(moment().add(2, 'days').calendar());
    $("#fourthday").html(moment().add(3, 'days').calendar());
    $("#fifthday").html(moment().add(4, 'days').calendar());
    $("#sixthday").html(moment().add(5, 'days').calendar());
    $("#seventhday").html(moment().add(6, 'days').calendar());
}

function getWeatherData () {
    //asks local machine for geo location
    navigator.geolocation.getCurrentPosition((success) => {
        // if success, console logs the GeoLocationPosition object with coordinates needed
        // to use the API
        console.log(success)
        //Deconstruction that fets us the latitude and longitude and sets them equal to the
        // success.coords variable
        let {latitude, longitude} = success.coords

        fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
           // Console logs all the data loaded from the api for weather in my location
            console.log(data);
        })
    })
}

getWeatherData();

function showWeatherData (data) {
    let {humidity, pressure, sunrise, wind_speed} = data.current;
    console.log(data.current);
}
