import { firstSearching } from "./modules/first.js"
import { secondSearching } from "./modules/second.js"

let closepopup = document.getElementById("popup")
let captureSection = document.getElementById('section-Label-A')

fetch('./component/section.html').then((response)=>response.text())
.then((response)=>{
    captureSection.innerHTML = response
    firstSearching()
})

fetch('./component/secondSection.html').then((response)=>response.text())
.then((response)=>{
    closepopup.innerHTML = response
    secondSearching()
})


// function closePopup(){
//     let temp = document.querySelector('.section-btn')
//     temp.classList.remove("open-popup")
// }