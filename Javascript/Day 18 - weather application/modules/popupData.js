
export const popupMethod = (lname, temperature, humidity) => {
    let locationNameA = document.getElementById('location-name')
    let temperatureA = document.getElementById('temperature-condition')
    let humidityA = document.getElementById('humidity-falls')

    locationNameA.innerHTML = lname
    temperatureA.innerHTML = `${temperature.toFixed(1)}°C`
    humidityA.innerHTML = `${humidity}%`
}