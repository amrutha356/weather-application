let weather1 = fetch("http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city1 = document.getElementById("city1")
let mainTemp1 = document.getElementById("mainTemp1")
let subTemp1 = document.getElementById("subTemp1")
weather1.
    then(data => data.json()).then(weather1 => {
        console.log(weather1)
        city1.textContent=`${weather1.name}/${weather1.sys.country}`
        mainTemp1.textContent = `${weather1.main.temp}`
        subTemp1.textContent = `${weather1.main.temp_max}/${weather1.main.temp_min}`
    }
    )

let weather2 = fetch("http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city2 = document.getElementById("city2")
let mainTemp2 = document.getElementById("mainTemp2")
let subTemp2 = document.getElementById("subTemp2")
weather2.
    then(data => data.json()).then(weather2 => {
        console.log(weather2)
        city2.textContent=`${weather2.name}/${weather2.sys.country}`
        mainTemp2.textContent = `${weather2.main.temp}`
        subTemp2.textContent = `${weather2.main.temp_max}/${weather2.main.temp_min}`
    })

    let weather3 = fetch("http://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city3 = document.getElementById("city3")
let mainTemp3 = document.getElementById("mainTemp3")
let subTemp3 = document.getElementById("subTemp3")
weather3.
    then(data => data.json()).then(weather3 => {
        console.log(weather3)
        city3.textContent=`${weather3.name}/${weather3.sys.country}`
        mainTemp3.textContent = `${weather3.main.temp}`
        subTemp3.textContent = `${weather3.main.temp_max}/${weather3.main.temp_min}`
    }
    )

let weather4 = fetch("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city4 = document.getElementById("city4")
let mainTemp4 = document.getElementById("mainTemp4")
let subTemp4 = document.getElementById("subTemp4")
weather4.
    then(data => data.json()).then(weather4 => {
        console.log(weather4)
        city4.textContent=`${weather4.name}/${weather4.sys.country}`
        mainTemp4.textContent = `${weather4.main.temp}`
        subTemp4.textContent = `${weather4.main.temp_max}/${weather4.main.temp_min}`
    }
    )

    let weather5 = fetch("http://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city5 = document.getElementById("city5")
let mainTemp5 = document.getElementById("mainTemp5")
let subTemp5 = document.getElementById("subTemp5")
weather5.
    then(data => data.json()).then(weather5 => {
        console.log(weather5)
        city5.textContent=`${weather5.name}/${weather5.sys.country}`
        mainTemp5.textContent = `${weather5.main.temp}`
        subTemp5.textContent = `${weather5.main.temp_max}/${weather5.main.temp_min}`
    }
    )

let weather6 = fetch("https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let city6 = document.getElementById("city6")
let mainTemp6 = document.getElementById("mainTemp6")
let subTemp6 = document.getElementById("subTemp6")
weather6.
    then(data => data.json()).then(weather6 => {
        console.log(weather6)
        city6.textContent=`${weather6.name}/${weather6.sys.country}`
        mainTemp6.textContent = `${weather6.main.temp}`
        subTemp6.textContent = `${weather6.main.temp_max}/${weather6.main.temp_min}`
    }
    )