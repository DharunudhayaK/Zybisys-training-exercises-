export let secondClicking = () => {
    let modeBtnLeft = document.getElementById('second-page-btn-A')
    let modeBtnright = document.getElementById('second-page-btn-B')
    let firstStep = document.getElementById('body-step1-number-label')
    let step2 = document.getElementById('body-section-rightlabel-B')
    let step1 = document.getElementById('body-section-rightlabel-A')
    let step3 = document.getElementById('body-section-rightlabel-C')
    let btnOuter = document.getElementById('secondButtons')
    let yearlyChange = document.getElementById('yearlyChangePart')
    let monthChange = document.getElementById('monthlyChangePart')
    let arcadePart = document.getElementById('arcadeLabel')
    let advancedPart = document.getElementById('advancedLabel')
    let proPart = document.getElementById('proLabel')
    let inputParaA = document.getElementById('second-section-innerdesc-A')
    let inputParaB = document.getElementById('second-section-innerdesc-B')
    let inputParaC = document.getElementById('second-section-innerdesc-C')
    let stepOuter = document.getElementById('body-step-label-B')
    let step3Outer = document.getElementById('body-step-label-C')
    let secondValueA = document.getElementById('second-section-amount-A')
    let secondValueB = document.getElementById('second-section-amount-B')
    let secondValueC = document.getElementById('second-section-amount-C')
    let select_passinputA = document.getElementById('second-section-descId-A')
    let select_passinputB = document.getElementById('second-section-descId-B')
    let select_passinputC = document.getElementById('second-section-descId-C')
    let nextStep = document.getElementById('nextStep2')
    let step2Outer = document.getElementById('body-step-label-B')


    let bool = true
    arcadePart.style.borderColor = "#aaa6cc"
    arcadePart.style.backgroundColor = "#f8f9fe"

    arcadePart.addEventListener('click', () => {
        arcadePart.style.borderColor = "#aaa6cc"
        arcadePart.style.backgroundColor = "#f8f9fe"
        advancedPart.style.borderColor = "#eeeeef"
        advancedPart.style.backgroundColor = "#fff"
        proPart.style.backgroundColor = "#fff"
        proPart.style.borderColor = "#eeeeef"
        let selectPassingA = document.getElementById('selectPassingPart')
        let amtLabel = document.getElementById('sectionDAmtA')
        let capture1 = select_passinputA.innerHTML
        let capture2 = secondValueA.textContent
        addData(capture1, capture2)
        function addData(input1, input2) {
            selectPassingA.innerHTML = input1
            amtLabel.textContent = input2
        }
        bool = true
        let totAmt = document.getElementById('fourth-section-Totalamt')
        totAmt.innerHTML = amtLabel.textContent
        // console.log(amtLabel.textContent);
        // let storeAmt = amtLabel.textContent
        // let sum = 0
        // findSum(storeAmt, sum)
        // let result = function findSum(input, sum) {
        //     let temp = "0"
        //     for (let out = 0; out < input; out++) {
        //         let ch = input[out]

        //         if (!isNaN(String(ch) * 1)) {
        //             temp += ch
        //         }
        //         else {
        //             sum += parseInt(temp)
        //             temp = "0"
        //         }
        //     }
        //     return sum + parseInt
        // }
        // console.log(result);
    })


    advancedPart.addEventListener('click', () => {
        advancedPart.style.borderColor = "#aaa6cc"
        advancedPart.style.backgroundColor = "#f8f9fe"
        arcadePart.style.borderColor = "#eeeeef"
        arcadePart.style.backgroundColor = "#fff"
        proPart.style.backgroundColor = "#fff"
        proPart.style.borderColor = "#eeeeef"
        let selectPassingA = document.getElementById('selectPassingPart')
        let amtLabel = document.getElementById('sectionDAmtA')
        let capture1 = select_passinputB.innerHTML
        let capture2 = secondValueB.textContent
        addData(capture1, capture2)
        function addData(input1, input2) {
            selectPassingA.innerHTML = input1
            amtLabel.textContent = input2
        }
        bool = true
        let totAmt = document.getElementById('fourth-section-Totalamt')
        totAmt.innerHTML = amtLabel.textContent
        // sum = 0
        // findSum(amtLabel, sum)
    })


    proPart.addEventListener('click', () => {
        proPart.style.borderColor = "#aaa6cc"
        proPart.style.backgroundColor = "#f8f9fe"
        arcadePart.style.backgroundColor = "#fff"
        arcadePart.style.borderColor = "#eeeeef"
        advancedPart.style.borderColor = "#eeeeef"
        advancedPart.style.backgroundColor = "#fff"

        let selectPassingA = document.getElementById('selectPassingPart')
        let amtLabel = document.getElementById('sectionDAmtA')
        let capture1 = select_passinputC.innerHTML
        let capture2 = secondValueC.textContent
        addData(capture1, capture2)
        function addData(input1, input2) {
            selectPassingA.innerHTML = input1
            amtLabel.textContent = input2
        }
        bool = true
        let totAmt = document.getElementById('fourth-section-Totalamt')
        totAmt.innerHTML = amtLabel.textContent
        // sum = 0
        // let res = findSum(amtLabel, sum)
    })


    let bool2 = true
    btnOuter.style.backgroundColor = "#032959"
    modeBtnLeft.addEventListener('click', () => {
        modeBtnright.style.display = "block"
        modeBtnright.disabled = false
        modeBtnLeft.disabled = true
        modeBtnright.style.backgroundColor = "#fff"
        yearlyChange.style.color = "#032959"
        modeBtnLeft.style.color = "#032959"
        modeBtnLeft.style.backgroundColor = "#032959"
        yearlyChange.style.fontWeight = "bold"
        monthChange.style.color = "#a4a5af"
        secondValueA.innerHTML = '$90/yr'
        secondValueB.innerHTML = '$120/yr'
        secondValueC.innerHTML = '$150/yr'
        inputParaA.style.display = "block"
        inputParaB.style.display = "block"
        inputParaC.style.display = "block"
        inputParaA.innerHTML = '2 months free'
        inputParaB.innerHTML = '2 months free'
        inputParaC.innerHTML = '2 months free'
        let monthA = document.getElementById('mon')
        let yearA = document.getElementById('yrly')
        monthA.style.display = "none"
        yearA.style.display = "block"
        let thirdmnyA = document.getElementById('third-money-A')
        let thirdmnyB = document.getElementById('third-money-B')
        let thirdmnyC = document.getElementById('third-money-C')
        thirdmnyA.textContent = '+$90/yr'
        thirdmnyB.textContent = '+$120/yr'
        thirdmnyC.textContent = '+$150/yr'
        let monLabel = document.getElementById('fourth-section-month-part-B')
        let yearLabel = document.getElementById('fourth-section-year-part-B')
        monLabel.style.display = "none"
        yearLabel.style.display = "block"
        bool2 = true
    })

    modeBtnright.addEventListener('click', () => {
        modeBtnLeft.style.display = "block"
        monthChange.style.color = "#032959"
        modeBtnLeft.style.backgroundColor = "#fff"
        modeBtnLeft.disabled = false
        modeBtnright.disabled = true
        modeBtnLeft.style.color = "#fff"
        yearlyChange.style.color = "#a4a5af"
        modeBtnright.style.backgroundColor = "#032959"
        secondValueA.innerHTML = '$9/mo'
        secondValueB.innerHTML = '$12/mo'
        secondValueC.innerHTML = '$15/mo'
        inputParaA.style.display = "none"
        inputParaB.style.display = "none"
        inputParaC.style.display = "none"
        let monthA = document.getElementById('mon')
        let yearA = document.getElementById('yrly')
        monthA.style.display = "block"
        yearA.style.display = "none"
        let thirdmnyA = document.getElementById('third-money-A')
        let thirdmnyB = document.getElementById('third-money-B')
        let thirdmnyC = document.getElementById('third-money-C')
        thirdmnyA.textContent = '+$1/mo'
        thirdmnyB.textContent = '+$1/mo'
        thirdmnyC.textContent = '+$1/mo'
        let monLabel = document.getElementById('fourth-section-month-part-B')
        let yearLabel = document.getElementById('fourth-section-year-part-B')
        monLabel.style.display = "block"
        yearLabel.style.display = "none"
        bool2 = true
    })


    let goBackPart = document.getElementById('goback-container')
    goBackPart.addEventListener('click', () => {
        step1.style.display = "block"
        step2.style.display = "none"
        firstStep.style.backgroundColor = "#bfe1fb"
        firstStep.style.color = "#325679"
        firstStep.style.fontWeight = "600"
        step2Outer.style.backgroundColor = "#4c45fd"
        step2Outer.style.color = "#fff"
    })


    if (bool == true && bool2 == true) {
        nextStep.addEventListener('click', () => {
            // setInterval(function (){
            step2.style.display = "none"
            step3.style.display = "block"
            stepOuter.style.backgroundColor = "#443cff"
            stepOuter.style.color = "#fff"
            step3Outer.style.backgroundColor = "#bfe1fb"
            step3Outer.style.color = "#325679"
            step3Outer.style.fontWeight = 600
            // },1500)
        })
    }

    step3.style.display = "none"
}