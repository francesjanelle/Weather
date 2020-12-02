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

function displayWeather(response) { 
    let h3City = document.querySelector(".city").value;
// document.querySelector(".city").innerHTML = response.data.name;
    document.querySelector(".nowTemp").innerHTML = response.data.main.temp;
}

function searchBox(event)
{
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}`
    const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
    let city = document.querySelector("#searchLocation").value
    const metric = "metric"

    axios.get(apiUrl).then(displayWeather)
    
}   
// const fahrenheit = "fahrenheit"