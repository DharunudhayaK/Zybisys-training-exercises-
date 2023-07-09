export let firstClicking = () => {
    let firstStep = document.getElementById('body-step1-number-label')
    let secondStep = document.getElementById('body-step-label-B')
    let step1 = document.getElementById('body-section-rightlabel-A')
    let step2 = document.getElementById('body-section-rightlabel-B')
    let nameBox = document.getElementById('inputBox--label--A1')
    let mailBox = document.getElementById('inputBox--label--B1')
    let phoneBox = document.getElementById('inputBox--label--C1')
    let invalidText = document.getElementById('invalidPart')
    let invalidText_2 = document.getElementById('invalidPart2')
    let invalidText_3 = document.getElementById('invalidPart3')
    let firstPageValidate = document.getElementById('bottom-button-label--A')

    step2.style.display = "none"
    firstPageValidate.addEventListener('click', () => {

        let bool1 = true
        let bool2 = true
        let bool3 = true
        nameValidation()
        function nameValidation() {
            let storenameBox = nameBox.value
            if (storenameBox.length > 3) {
                nameBox.style.borderColor = "green"
                invalidText.style.display = "none"
                bool1 = true

            }
            else {
                invalidText.style.display = "block"
                nameBox.style.borderColor = "red"
                bool1 = false
            }
        }

        emailValidation()
        function emailValidation() {
            let storemailBox = mailBox.value
            let matchPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
            if (storemailBox.match(matchPattern)) {
                mailBox.style.borderColor = "green"
                bool2 = true
                invalidText_2.style.display = "none"
            } else {
                invalidText_2.style.display = "block"
                mailBox.style.borderColor = "red"
                bool2 = false
            }
        }

        phoneValidation()
        function phoneValidation() {
            let storePhoneNo = phoneBox.value
            //console.log(storePhoneNo);
            let phonePattern = `[0-9]{3}-[0-9]{3}-[0-9]{4}`
            if (storePhoneNo > 0) {
                phoneBox.style.borderColor = "green"
                invalidText_3.style.display = "none"
                bool3 = true
            }
            else {
                invalidText_3.style.display = "block"
                phoneBox.style.borderColor = "red"
                bool3 = false
            }
        }

        if (bool1 == true && bool2 == true && bool3 == true) {
            step1.style.display = "none"
            step2.style.display = "block"
            firstStep.style.backgroundColor = "#443cff"
            firstStep.style.color = "#fff"
            firstStep.style.fontWeight = "0"
            secondStep.style.backgroundColor = "#bfe1fb"
            secondStep.style.color = "#325679"
            secondStep.style.fontWeight = "600"
        }
    })
    step2.style.display = "none"
    firstStep.style.backgroundColor = "#bfe1fb"
    firstStep.style.color = "#325679"
    firstStep.style.fontWeight = "600"
}