export let fifthClicking = () => {
    let fourthBtn = document.getElementById('sectionD-NextStep-Button')
    let step4 = document.getElementById('body-section-rightlabel-D')
    let step5thank = document.getElementById('body-section-rightlabel-E')
    fourthBtn.addEventListener('click', () => {
        step4.style.display = "none"
        step5thank.style.display = "block"
    })
}