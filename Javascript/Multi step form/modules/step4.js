export let fourthClicking = () => {
    let changeBtn = document.getElementById('fourth-section-change-btn')
    let step4Label = document.getElementById('body-section-rightlabel-D')
    let step3Label = document.getElementById('body-section-rightlabel-C')
    let step2Label = document.getElementById('body-section-rightlabel-B')
    let step4Outer = document.getElementById('body-step-label-D')
    let step2Outer = document.getElementById('body-step-label-B')
    let gobackbtn = document.getElementById('sectionD-Goback-Button')
    let step3Outer = document.getElementById('body-step-label-C')

    changeBtn.addEventListener('click', () => {
        step4Label.style.display = "none"
        step2Label.style.display = "block"
        step4Outer.style.backgroundColor = "#443cff"
        step4Outer.style.color = "#fff"
        step2Outer.style.backgroundColor = "#bfe1fb"
        step2Outer.style.color = "#325679"
        step2Outer.style.fontWeight = 600
    })
    
    gobackbtn.addEventListener('click', () => {
        step4Label.style.display = "none"
        step3Label.style.display = "block"
        step4Outer.style.backgroundColor = "#443cff"
        step4Outer.style.color = "#fff"
        step3Outer.style.backgroundColor = "#bfe1fb"
        step3Outer.style.color = "#325679"
        step3Outer.style.fontWeight = 600
    })



}