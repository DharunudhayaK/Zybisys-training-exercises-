
export let openPopup = () =>{
    let popupData = document.getElementById('popup')
    popupData.classList.add("open-popup")
}

// export function closePopup(){
//     let captureId = document.getElementById('closeIcon')
//     .classList.remove("popup") 
// }

function closePopup(){
    let captureId = document.getElementById('closeIcon')
    let header = document.getElementById('popup')
    captureId.classList.remove("popup") 
}