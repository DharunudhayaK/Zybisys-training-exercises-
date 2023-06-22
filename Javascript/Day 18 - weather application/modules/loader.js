export const loaderData = () =>{
    let loaderDataB = document.getElementById('loader')
    if(loaderData){
    loaderDataB.style.display = "block"        
    }
    else{
        loaderDataB.style.display = "none"
    }
}