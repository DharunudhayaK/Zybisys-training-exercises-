import { addTaskImage } from "./modules/imgStore.js";

let mainSectionName = document.getElementById('img-collection')

fetch('./components/card.html').then((response) => response.text())
    .then((input) => {
        mainSectionName.innerHTML = input
    })

let subsection = document.getElementById('desc-container')
fetch('./components/imgcapture.html').then((response) => response.text())
    .then((input) => {
        subsection.innerHTML = input;
        document.getElementById("end-label").addEventListener('click', (event) => {
            const byClEl=document.getElementsByClassName("out")
            const containerEl = document.getElementById("outer-label");
            // containerEl.style.display = "none";
            const x = [...byClEl];
            x.forEach(ele=>{
                console.log("---elel---",ele)
                ele.style.display = "none";
            })
            // console.log("hello",input);
            // console.log(containerEl)
            // console.log(byClEl)
            // console.log(x)
    });
    })

document.getElementById('img-collection').addEventListener("click", () => {
    // event.preventDefault;
    document.getElementById('buttonContainer').style.display = 'none'
    let url = 'https://restcountries.com/v3.1/all'
    fetch(url).then(response => response.json())
        .then(response => {
            addTaskImage(response)
        })
})

