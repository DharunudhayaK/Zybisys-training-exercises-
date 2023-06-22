import { array } from "./addprice.js";

let totalValue = document.createElement('p')

export const showPara = () =>{
    try{
        let ul = document.getElementById('amt')
        ul.innerHTML = ""
        let total = 0
        array.forEach(expenditure =>{
            let ei = document.createElement('li')
            ei.innerText = `${expenditure.expenseDesc}:$${expenditure.expensePrice}`

            ul.appendChild(ei)

            total += parseInt(expenditure.expensePrice)
        })

        totalValue.innerText = `add: ${total}`
        document.body.appendChild(totalValue)
    }
    catch(error){
        alert(`give some error in the input field`)
    }
}