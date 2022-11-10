let home = fetch("http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city = document.getElementById("city")
let currentTemp = document.getElementById("currentTemp")
let subTemp = document.getElementById("subTemp")
home.
    then(data => data.json()).then(home => {
        console.log(home)
        city.textContent = `${home.name}/${home.sys.country}`
        currentTemp.textContent = `${home.main.temp}`
        subTemp.textContent = `${home.main.temp_max}/${home.main.temp_min}`
    }
    )