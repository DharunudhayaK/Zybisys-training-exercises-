import { addData } from "./modules/addValue.js"
import { apiCalling } from "./modules/pop.js"
let locName = document.getElementById('weather-body-label')
let inputName = document.getElementById('weather-Inputbody-label')
let tableCapture = document.getElementById('weather-table-label')
let loaderData = document.getElementById('loader')

fetch('./components/weatherDetect.html').then((response) => response.text())
    .then((input) => {
        locName.innerHTML = input
    })

fetch('./components/inputWeather.html').then((response) => response.text())
    .then((input) => {
        inputName.innerHTML = input
    })

fetch('./components/tableWeather.html').then((response) => response.text())
    .then((input) => {
        tableCapture.innerHTML = input
    })

fetch('./components/loader.html').then((response) => response.text())
    .then((input) => {
        loaderData.innerHTML = input
    })

document.getElementById("weather-body-label").addEventListener("submit", (event) => {
    try {
        let captureLocationName = document.getElementById('locationName').value
        let encryptLocationId = `c7a9299a3d8da1d910da08bcffb48a3b`

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${captureLocationName}&appid=${encryptLocationId}`
        fetch(url).then(response => response.json())
            .then(response => {
                if (response.cod == 200) {
                    let lname = response.name
                    let temp = response.main.temp - 273.15
                    let hum = response.main.humidity

                    addData(lname)
                }
                else {
                    alert("sorry  to find the location")
                }
            })
            .catch((error) => {
                alert(`error occured ${error.name}`)
            })
        event.preventDefault()

    }
    catch {
        alert(`error occured`)
    }
})