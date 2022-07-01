const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast")
const currentTempEl = document.getElementById("current-temperature");
const currentTime = document.getElementById("currentTime")
const secondDay = document.querySelector(".secondday");
const thirdDay = document.querySelector(".thirdday");
const fourthDay = document.querySelector(".fourthday");

const apikey = "1ffa8a66804d64ed7ae1213c9ac1bf3e"

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
        //Deconstruction that fetchs us the latitude and longitude and sets them equal to the
        // success.coords variable
        let {latitude, longitude} = success.coords

        fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`).then(res => res.json()).then(data => {
           // Console logs all the data loaded from the api for weather in my location
            console.log(data);
            renderWeatherForecast(data)
            renderSecondDayForecast(data)
            renderThirdDayForecast(data)
            renderFourthDayForecast(data)
            renderTodaysForecast(data)
            renderFifthDayForecast(data)
            renderSixthDayForecast(data)
            
        })
    })
}
getWeatherData();

function renderWeatherForecast (data) {
    let {humidity, pressure, temp} = data.list[0].main;
    let ctof = temp * 9 / 5 + 32
    

    currentWeatherItemsEl.innerHTML = `<div class="weather-item">
    <div>Humidity</div>
    <div>${humidity} %</div>
</div>
<div class="weather-item">
    <div>Pressure</div>
    <div>${pressure} MB</div>
</div>
<div class="weather-item">
    <div>Temperature
    ${Math.round(ctof)} &#x2109;</div>
</div>  
    `
}

function renderTodaysForecast (data) {
    let {temp_max, temp_min} = data.list[0].main;
    let minFahr = temp_min * 9 / 5 + 32;
    let maxFahr = temp_max * 9 / 5 + 32;
    

    currentTempEl.innerHTML = `<div class="today" id="current-temperature">
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
    <div class="day" id="day"></div>
    <div class="temp">Night ${Math.round(minFahr)}&#x2109</div>
    <div class="temp">Day ${Math.round(maxFahr)}&#x2109</div>
</div>  
    `
}

function renderSecondDayForecast (data) {
    let {temp_max, temp_min} = data.list[1].main;
    let minFahr = temp_min * 9 / 5 + 32;
    let maxFahr = temp_max * 9 / 5 + 32;
    

    secondDay.innerHTML = `<div class="weather-forecast-item">
    <div id="secondday"></div>
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
    <div class="temp">Night ${Math.round(minFahr)}&#x2109</div>
    <div class="temp">Day ${Math.round(maxFahr)}&#x2109</div>
</div>  
    `
}

function renderThirdDayForecast (data) {
    let {temp_max, temp_min} = data.list[2].main;
    let minFahr = temp_min * 9 / 5 + 32;
    let maxFahr = temp_max * 9 / 5 + 32;
    

    thirdDay.innerHTML = `<div class="weather-forecast-item thirdday">
    <div id="thirdday"></div>
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
    <div class="temp">Night ${Math.round(minFahr)}&#x2109;</div>
    <div class="temp">Day ${Math.round(maxFahr)}&#x2109;</div>
</div>
    `
}

function renderFourthDayForecast (data) {
    let {temp_max, temp_min} = data.list[3].main;
    let minFahr = temp_min * 9 / 5 + 32;
    let maxFahr = temp_max * 9 / 5 + 32;
    

    fourthDay.innerHTML = `<div class="weather-forecast-item fourthday">
    <div id="fourthday"></div>
    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" class="w-icon">
    <div class="temp">Night ${Math.round(minFahr)}&#x2109;</div>
    <div class="temp">Day ${Math.round(maxFahr)}&#x2109;</div>
</div>
    `
}








