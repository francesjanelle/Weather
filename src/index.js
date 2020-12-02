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


const apiKey = "deb4d0036edfa966c7a36750fd024ceb"
let city = "Denver"
const metric = "metric"
const fahrenheit = "fahrenheit"