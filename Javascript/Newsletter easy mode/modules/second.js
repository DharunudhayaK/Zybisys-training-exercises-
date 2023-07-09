export let secondSearching = () => {
    let closepopup = document.getElementById("popup")
    let captureSection = document.getElementById('section-Label-A')
    let closeButton = document.getElementById("popupBtn")

    closeButton.addEventListener('click', () => {
        closepopup.style.display = "none"
        captureSection.style.display = "block"
        captureSection.style.display = "flex"
    })
}