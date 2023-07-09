import { voiceFunction } from "./modules/audio.js"
import { callingA } from "./modules/linkContainer.js"

let sectionLabel = document.getElementById('sectionB')
let sectionLabelB = document.getElementById("sectionC")
let sectionLabelD = document.getElementById("sectionD")
let buttonColor = document.getElementById('formLabel')
let buttonColorB = document.getElementById('btn1')
let buttonContainerA = document.getElementById('btn1')
let buttonContainerB = document.getElementById('btn2')
let btnContainer = document.getElementById('formLabel')
let bdy = document.getElementById('body')
let outerDivContainer = document.getElementById('body-section--label')

fetch('./components/createTag.html').then((response) => response.text())
    .then((response) => {
        sectionLabel.innerHTML = response
    })

fetch('./components/subcontent.html').then((response) => response.text())
    .then((response) => {
        sectionLabelB.innerHTML = response

    })

fetch('./components/subcontentB.html').then((response) => response.text())
    .then((response) => {
        sectionLabelD.innerHTML = response
    })

document.getElementById('searchButton').addEventListener('click', (event) => {
    event.preventDefault();
    let searchInputWord = document.getElementById('searchInput').value
    let fetchId = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInputWord}`

    fetch(fetchId).then((input) => input.json())
        .then((input) => {
            callingA(input)
            voiceFunction(input)
        })
})

buttonColor.style.backgroundColor = "black"
buttonColorB.style.backgroundColor = "#ffff"

// let audioBegin = document.getElementById('startAudio')
// audioBegin.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log("hello")
//     let audioSrc = new Audio();
//     for (let i = 0; i < response[0].phonetics.length; i++) {
//         audioSrc.src = response[0].phonetics[i].audio
//         audioSrc.play()
//         // img.src = "./assets/Pause.png"
//         // setTimeout(() => {
//         //     img.src = "./assets/Play.png"
//         // }, 1750);
//     }
// })
//let butnB = document.getElementById('btn2')
// while (buttonContainerA != null) {
buttonContainerA.addEventListener('click', () => {
    outerDivContainer.style.backgroundColor = "black"
    outerDivContainer.style.color = "#fff"
    buttonContainerB.style.display = "block"
    buttonContainerB.style.backgroundColor = "black"
    buttonContainerA.disabled = true
    buttonContainerB.disabled = false
    buttonContainerB.style.border = "none"
    buttonContainerA.style.color = "#fff"
    buttonContainerA.style.borderColor = "#fff"
    btnContainer.style.backgroundColor = "#fff"
})

buttonContainerB.addEventListener('click', () => {
    outerDivContainer.style.backgroundColor = "#fff"
    buttonContainerB.disabled = true
    buttonContainerA.disabled = false
    buttonContainerA.style.backgroundColor = "#fff"
    btnContainer.style.backgroundColor = "black"
    buttonContainerA.style.border = "none"
    outerDivContainer.style.color = "black"
})

window.addEventListener('change', (event) => {
    event.preventDefault()
    let selectOption = document.getElementById('select-container-top')
    let newVlue = selectOption.value
    if (event.target == selectOption) {
        switch (newVlue) {
            case 'monospace':
                bdy.style.fontFamily = "monospace"
                break
            case 'cursive':
                bdy.style.fontFamily = "cursive"
                break
            case 'arial':
                bdy.style.fontFamily = "arial"
                break
            default:
                break
        }
    }
})