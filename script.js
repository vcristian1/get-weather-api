const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast")
const currentTempEl = document.getElementById("current-temp");
const currentTime = document.getElementById("currentTime")

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
