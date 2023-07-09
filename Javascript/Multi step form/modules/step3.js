export const thirdClicking = () => {
    let checkBoxA = document.getElementById('third-checkBox-A')
    let checkBoxB = document.getElementById('third-checkBox-B')
    let checkBoxC = document.getElementById('third-checkBox-C')
    let thirdStep = document.getElementById('body-step-label-C')
    let thirdDescA = document.getElementById('third-online-desc')
    let thirdDescB = document.getElementById('third-larger-desc')
    let thirdDescC = document.getElementById('third-custom-desc')
    let thirdMoneyA = document.getElementById('third-money-A')
    let thirdMoneyB = document.getElementById('third-money-B')
    let thirdMoneyC = document.getElementById('third-money-C')
    let thirdCheckBoxSectionA = document.getElementById('third-section-desc-A')
    let thirdCheckBoxSectionB = document.getElementById('third-section-desc-B')
    let thirdCheckBoxSectionC = document.getElementById('third-section-desc-C')
    let nextStep_3 = document.getElementById('sectionC-NextStep-Button')
    let goBack = document.getElementById('sectionC-Goback-Button')
    let step4 = document.getElementById('body-section-rightlabel-D')
    let step3 = document.getElementById('body-section-rightlabel-C')
    let step2 = document.getElementById('body-section-rightlabel-B')
    let stepOuter = document.getElementById('body-step-label-B')
    let step4Outer = document.getElementById('body-step-label-D')
    var num1 = 1
    var num2 = 1
    var num3 = 1

    var bool1 = true
    var bool2 = true
    var bool3 = true
    checkBoxA.addEventListener('click', () => {

        let fourthdesc = document.getElementById('fourth-section-innerdesc-A')
        let fourthAmt = document.getElementById('fourth-section-amt-A')

        if (checkBoxA.checked) {
            bool1 = true
            thirdCheckBoxSectionA.style.backgroundColor = "#f8f9fe"
            let capture1 = thirdDescA.innerHTML
            let capture2 = thirdMoneyA.textContent

            passToFourth(capture1, capture2)
            function passToFourth(input1, input2) {
                fourthdesc.innerHTML = input1
                fourthAmt.textContent = input2
            }
        }
        else {
            bool2 = false
            fourthdesc.style.display = "none"
            fourthAmt.style.display = "none"
            thirdCheckBoxSectionA.style.backgroundColor = "#fff"
        }
    })

    checkBoxB.addEventListener('click', () => {

        let fourthdescB = document.getElementById('fourth-section-inner-B')
        let fourthAmtB = document.getElementById('fourth-section-amt-B')

        if (checkBoxB.checked) {
            bool2 = true
            thirdCheckBoxSectionB.style.backgroundColor = "#f8f9fe"
            let capture1 = thirdDescB.innerHTML
            let capture2 = thirdMoneyB.textContent

            passToFourth(capture1, capture2)
            function passToFourth(input1, input2) {
                fourthdescB.innerHTML = input1
                fourthAmtB.textContent = input2
            }
        }
        else {
            bool2 = false
            fourthdescB.style.display = "none"
            fourthAmtB.style.display = "none"
            thirdCheckBoxSectionB.style.backgroundColor = "#fff"
        }
    })

    checkBoxC.addEventListener('click', () => {
        let fourthdescC = document.getElementById('fourth-section-inner-C')
        let fourthAmtC = document.getElementById('fourth-section-amt-C')

        if (checkBoxC.checked) {
            bool3 = true
            thirdCheckBoxSectionC.style.backgroundColor = "#f8f9fe"
            let capture1 = thirdDescC.innerHTML
            let capture2 = thirdMoneyC.textContent

            passToFourth(capture1, capture2)
            function passToFourth(input1, input2) {
                fourthdescC.innerHTML = input1
                fourthAmtC.textContent = input2
            }
        }
        else {
            bool3 = false
            fourthdescC.style.display = "none"
            fourthAmtC.style.display = "none"
            thirdCheckBoxSectionC.style.backgroundColor = "#fff"
        }
    })

    if (bool1 == true || bool2 == true || bool3 == true) {
        nextStep_3.addEventListener('click', () => {
            step3.style.display = "none"
            step4.style.display = "block"
            stepOuter.style.backgroundColor = "#443cff"
            stepOuter.style.color = "#fff"
            thirdStep.style.backgroundColor = "#4540fb"
            thirdStep.style.color = "#fff"
            step4Outer.style.backgroundColor = "#c2e2fe"
            step4Outer.style.color = "#325679"
            step4Outer.style.fontWeight = 600
        })
    }

    goBack.addEventListener('click', () => {
        step3.style.display = "none"
        step2.style.display = "block"
        thirdStep.style.backgroundColor = "#4c45fd"
        thirdStep.style.color = "#fff"
        stepOuter.style.backgroundColor = "#c1e5ff"
        stepOuter.style.color = "#24486e"
        stepOuter.style.fontWeight = 600
    })
}