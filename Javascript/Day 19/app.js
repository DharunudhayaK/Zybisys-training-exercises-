import { showPara } from "./module/para.js"
import { addPrices, array } from "./module/addprice.js"

let captureForm = document.getElementById('body-container-a')
let captureDiv = document.getElementById('body-container-b')


fetch('./components/expenseInputBox.html').then((response) => response.text())
    .then((input) => {
        captureForm.innerHTML = input
    })

fetch('./components/expenseInputBoxB.html').then((response) => response.text())
    .then((input) => {
        captureDiv.innerHTML = input
    })

// document.getElementById('expense-btn').addEventListener('click', (event) =>{
//     event.preventDefault();
let form = document.getElementById('body-container-a')
form.addEventListener('submit', (event) => {
    try {
        event.preventDefault()

        let captureInputBoxA = document.getElementById('inputBox-name-label')
        let captureInputBoxB = document.getElementById('inputBox-price-label')

        let expenseDesc = captureInputBoxA.value
        let expensePrice = captureInputBoxB.value

        if (expenseDesc && expensePrice) {
            addPrices(expenseDesc, expensePrice)
            console.log("expenses", array);
            showPara()
        }
    }
    catch (err) {
        alert(`error :${err.message}`)
    }

})