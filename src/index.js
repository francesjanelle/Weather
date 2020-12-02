// alert("Hello world!");
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
//alert(year);

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
//alert(month)
//alert(`Today is ${today}. ${month} ${currentDate}, ${year}`)

let now = document.querySelector(".now")
    now.innerHTML = `${month} ${currentDate}, ${year}`

const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
let city = "Denver"
const metric = "metric"
const fahrenheit = "fahrenheit"