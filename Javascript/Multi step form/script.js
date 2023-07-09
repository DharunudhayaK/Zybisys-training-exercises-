import { firstClicking } from "./modules/step1.js"
import { secondClicking } from "./modules/step2.js"
import { thirdClicking } from "./modules/step3.js"
import { fourthClicking } from "./modules/step4.js"
import { fifthClicking } from "./modules/step5ThankYou.js"

let sectionAlabel = document.getElementById('body-section-rightlabel-A')
let sectionBlabel = document.getElementById('body-section-rightlabel-B')
let sectionClabel = document.getElementById('body-section-rightlabel-C')
let sectionDlabel = document.getElementById('body-section-rightlabel-D')
let sectionElabel = document.getElementById('body-section-rightlabel-E')
fetch('./components/sectionA.html').then((response) => response.text())
    .then((response) => {
        sectionAlabel.innerHTML = response
        firstClicking()
    })

fetch('./components/sectionB.html').then((response) => response.text())
    .then((response) => {
        sectionBlabel.innerHTML = response
        secondClicking()
    })

fetch('./components/sectionC.html').then((response) => response.text())
    .then((response) => {
        sectionClabel.innerHTML = response
        thirdClicking()
    })

fetch('./components/sectionD.html').then((response) => response.text())
    .then((response) => {
        sectionDlabel.innerHTML = response
        fourthClicking()
    })

fetch('./components/sectionE.html').then((response) => response.text())
    .then((response) => {
        sectionElabel.innerHTML = response
        fifthClicking()
    })

let img = document.getElementById('bgImgLabel')
img.src = "bg-sidebar-desktop.svg"

document.getElementById('body-section-rightlabel-C').style.display = "none"
document.getElementById('body-section-rightlabel-D').style.display = "none"
document.getElementById('body-section-rightlabel-E').style.display = "none"


