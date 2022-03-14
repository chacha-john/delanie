let card = document.querySelectorAll(".card")
let image = document.querySelectorAll(".hideShow")
let text = document.querySelectorAll(".showHide")
card[0].addEventListener("click",(e)=>{
    e.preventDefault()
    if(text[0].style.display == "none"){
        text[0].style.display = "block"
        image[0].style.display="none"
    }
    else{
        image[0].style.display = "block"
        text[0].style.display = "none"
    }
})
card[1].addEventListener("click",(e)=>{
    e.preventDefault()
    if(text[1].style.display == "none"){
        text[1].style.display = "block"
        image[1].style.display="none"
    }
    else{
        image[1].style.display = "block"
        text[1].style.display = "none"
    }
})
card[0].addEventListener("click",(e)=>{
    e.preventDefault()
    if(text[2].style.display == "none"){
        text[2].style.display = "block"
        image[2].style.display="none"
    }
    else{
        image[2].style.display = "block"
        text[2].style.display = "none"
    }
})