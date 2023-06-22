import { loaderData } from "./loader.js"
import { openPopup } from "./openPopup.js"
import { apiCalling } from "./pop.js"

let increment = 1
let i
export const addData = (locationName) => {

    let tableAccess = document.getElementById('table-label')
    let rowAdd = tableAccess.insertRow()
    let cell1 = rowAdd.insertCell(0)
    let cell2 = rowAdd.insertCell(1)
    let cell3 = rowAdd.insertCell(2)
    let cell4 = rowAdd.insertCell(3)

    cell1.innerHTML = increment
    cell2.innerHTML = locationName
    cell3.innerHTML = '<input type="button" value="show" onclick="showData()"/>'
    cell4.innerHTML = '<input type="button" value="Delete" onclick="deleteData()"/>'

    cell4.addEventListener('click', () => {
        if (rowAdd != ' ') {
            rowAdd.remove(locationName)
        }

        for(i=1; i<table.rows.length; i++){
            table.rows[i].cells[0].innerHTML = i
        }
        increment--
    })
    increment++
    cell3.addEventListener('click', () => {
        apiCalling()
        loaderData(true)
        openPopup()
    })
}