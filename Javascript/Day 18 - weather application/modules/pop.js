import { loaderData } from './loader.js';
import { popupMethod } from './popupData.js';

export let apiCalling = () => {

    let captureLocationName = document.getElementById('locationName')

    let addLocationName = captureLocationName.value;

    let encryptLocationId = `c7a9299a3d8da1d910da08bcffb48a3b`

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${addLocationName}&appid=${encryptLocationId}`
    loaderData(true)
    fetch(url).then(response => response.json())
        .then(response => {
            loaderData(false)
            if (response.cod == 200) {
                let lname = response.name
                let temp = response.main.temp - 273.15
                let hum = response.main.humidity

                popupMethod(lname, temp, hum)
            }
            else {
                alert("unable to find the location")
            }
        })
        .catch((error) => {
            loaderData(false)
            alert(`error occured ${error.name}`)
        })
}