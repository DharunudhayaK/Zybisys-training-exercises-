export let firstSearching = () => {
    let closepopup = document.getElementById("popup")
    let captureSection = document.getElementById('section-Label-A')

    let captureButton = document.getElementById('sectionBtn')

    captureButton.addEventListener('click', (event) => {
        event.preventDefault()
        let captureInputValue = document.getElementById('sectionInput').value
        var pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (captureInputValue.match(pattern)) {
            document.getElementById("emailCapture").innerHTML = document.getElementById("sectionInput").value
            let validCapture = document.getElementById('validlabel')
            validCapture.style.display = "none"
            let captureButton = document.getElementById('sectionInput')
            captureButton.style.borderColor = "green"
            // let captureButton = document.getElementById('sectionInput')
            //  let validCapture = document.getElementById('validlabel')
            //  validCapture.style.display = "block"
            //  validCapture.style.color = "#49be25"
            // setInterval( function() {
            //     location.reload()
            // },2000)
            // captureButton.style.borderBlockColor = "#ef8a89"
            // captureButton.style.borderColor = "#ef8a89"
            captureSection.style.display = "none"
            closepopup.style.display = "block"
        }
        else if (!(captureInputValue.match(pattern))) {
            let captureButton = document.getElementById('sectionInput')
            let validCapture = document.getElementById('validlabel')
            validCapture.style.display = "block"
            // let captureSection = document.getElementById('section-Label-A')

            validCapture.style.color = "red"
            // setInterval(function () {
            //     location.reload()
            // }, 2000)
            captureButton.style.borderBlockColor = "#ef8a89"
            captureButton.style.borderColor = "#ef8a89"
        }
    })
}