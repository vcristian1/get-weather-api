const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast")
const currentTempEl = document.getElementById("current-temp");
const currentTime = document.getElementById("currentTime")

setInterval(() => {
    console.log(time)
    displayCurrentTime();
    displayCurrentDate();
    displayCurrentDayForecast();
    displaySecondDayForecast();
    displayThirdDayForecast();
    displayFourthDayForecast();
    displayFifthDayForecast();
    displaySixthDayForecast();
    displaySeventhDayForecast();

}, 1000)

function displayCurrentTime () {
    $("#currentTime").html(moment().format('LT'));
}

function displayCurrentDate () {
    $("#currentDate").html(moment().format('LL'));
}

function displayCurrentDayForecast () {
    $("#day").html(moment().format('dddd'));
}

function displaySecondDayForecast () {
    $("#secondday").html(moment().add(1, 'days').calendar());
}
function displayThirdDayForecast () {
    $("#thirdday").html(moment().add(2, 'days').calendar());
}
function displayFourthDayForecast () {
    $("#fourthday").html(moment().add(3, 'days').calendar());
}
function displayFifthDayForecast () {
    $("#fifthday").html(moment().add(4, 'days').calendar());
}
function displaySixthDayForecast () {
    $("#sixthday").html(moment().add(5, 'days').calendar());
}
function displaySeventhDayForecast () {
    $("#seventhday").html(moment().add(6, 'days').calendar());
}






function displayTomorrowsDate () {

}