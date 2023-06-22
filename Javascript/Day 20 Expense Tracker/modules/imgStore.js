
export let addTaskImage = (response) => {
    for (let out = 0; out < response.length; out++) {
        let display = document.getElementById("flag-label");
        display.setAttribute("class", "overlay")
        let createDivision = document.createElement('div')
        let imgLabel = document.createElement('img')

        imgLabel.setAttribute("class", "imageContainer")
        let flag = response[out].flags.svg;
        imgLabel.src = flag;
        createDivision.appendChild(imgLabel)
        display.appendChild(createDivision)

        let desc = response[out].flags.alt
        let name = response[out].name.common

        imgLabel.addEventListener("click", () => {

            let paraLabel = document.getElementById('nameCountry')
            paraLabel.innerHTML = name

            let outerContainer = document.getElementById('outer-label')
            outerContainer.style.display = "block"

            let imgpart = document.getElementById('img-label')
            imgpart.src = imgLabel.src

            let descImg = document.getElementById('desc-label')
            descImg.innerHTML = desc

        })
    }
}