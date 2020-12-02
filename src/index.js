// Date Beginning

let currentDay = new Date();

let currentDate = currentDay.getDate();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let today = days[currentDay.getDay()];

let year = currentDay.getFullYear();

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

let month = months[currentDay.getMonth()];

let now = document.querySelector(".now")
    now.innerHTML = `${today}, ${month} ${currentDate}, ${year}`

// API Beginning

function showWeather(response) { 
    document.querySelector("#city").innerHTML = response.data.name;
    document.quertSelector("#nowTemp").innnerHTML = Math.round(response.data.main.temp);
}

function searchBox(city, locateSearch) {
let apiKey = "deb4d0036edfa966c7a36750fd024ceb"
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeather)
}

function locateSearch(event) { 
    event.preventDefault();
    let city = document.querySelector("#searchLocation").value;
  
}

let form = document.querySelector('#searching')
form.addEventListener("submit", locateSearch)
