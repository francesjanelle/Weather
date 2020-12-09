
function formatDate(timestamp) { 
    let dateNow = new Date(timestamp)

    
    /* let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let day = days[dateNow.getDay()]; */
    
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
    
    let month = months[dateNow.getMonth()]
    
    let date = dateNow.getDate()
    
    if (date < 10) { 
        date = `0${date}`
    }
    
    return `${month} ${date}, ${formatHours(timestamp)}`
}

function formatHours(timestamp) {
    let dateNow = new Date(timestamp)
    let hour = dateNow.getHours();
    
    if (hour < 10) { 
        hour = `0${hour}`
    }
    
    let minute = dateNow.getMinutes();
    
    if (minute < 10) { 
        minute = `0${minute}`
    }
    return `${hour}:${minute}`
}

function showTemp(response) { 
    
    console.log(response.data);
    let temperature = document.querySelector("#nowTemp")
    let searchCity = document.querySelector("#city")
    let description = document.querySelector("#description")
    let humidity = document.querySelector("#humid")
    let wind = document.querySelector("#wind")
    let nowDate = document.querySelector(".now")
    let icon = document.querySelector("#icon")

    celsiusTemp = response.data.main.temp
    
    temperature.innerHTML = `${Math.round(celsiusTemp)}°C`;
    searchCity.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description; 
    humidity.innerHTML = response.data.main.humidity + "%";
    wind.innerHTML = Math.round(response.data.wind.speed) + " Km/h";
    nowDate.innerHTML = formatDate(response.data.dt * 1000);
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`); 
    icon.setAttribute("alt", response.data.weather[0].description);
}

function forecastWeather(response) {
    console.log(response.data)
}

function search(city) {
    
        // const apiKey = "deb4d0036edfa966c7a36750fd024ceb";
        // let city = "Denver"

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
        axios.get(apiUrl).then(showTemp);

        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`
        axios.get(apiUrl).then(forecastWeather);
    }

function searchProcess(event) {
    event.preventDefault();
    
    let searchCity = document.querySelector("#search-location")
    search(searchCity.value);
    // console.log(searchCity.value)
    
}

function currentLocation(position) { 
    
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=deb4d0036edfa966c7a36750fd024ceb&units=metric`

    axios.get(apiUrl).then(showTemp);
}

 function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
}

///

let celsiusTemp = null;

let form = document.querySelector("#searching")
form.addEventListener("submit", searchProcess)

let currentButton = document.querySelector("#greenLocation")
currentButton.addEventListener("click", getCurrentLocation)

/// 

function nowCelsius(event) {
    event.preventDefault();
    // (32°F − 32) * 5/9 = 0°C

    celsiusIcon.classList.add("active")
    fahrenIcon.classList.remove("active")

    let celTemp = document.querySelector("#nowTemp")
    celTemp.innerHTML = `${Math.round(celsiusTemp)}°C`;
}

let celsiusIcon = document.querySelector("#celsius")
celsiusIcon.addEventListener("click", nowCelsius)

function nowFahren(event) {
    event.preventDefault();
    // (0°C * 9/5) + 32 = 32°F
    
    celsiusIcon.classList.remove("active")
    fahrenIcon.classList.add("active")

    let fahrTemp = document.querySelector("#nowTemp")
    let fahrValue = (celsiusTemp * (9/5)) + 32
    fahrTemp.innerHTML = `${Math.round(fahrValue)}°F`;
}

let fahrenIcon = document.querySelector("#fahrenheit")
fahrenIcon.addEventListener("click", nowFahren)

search("Denver")