const finderMain = document.getElementById("finder-div-main")
const finder = document.getElementById("finder")
const pinterestIconPage = document.getElementById("pinterest-icon-R")
const background = document.getElementById("background")
const buttonStart = document.getElementById("button-start")
const buttonStartText = document.getElementById("button-start-text")
const firstArrow = document.getElementById("first-arrow")
const fatherPopUp = document.getElementById("button-start-father")








//variables 1
let anchoActual = window.innerWidth;
let anchoBar;
let estado = 0;
anchoActual = window.innerWidth;
anchoBar = (anchoActual*0.99)-495.350626; 
// anchoBar = (anchoActual*1.01504514)-495.350626; 
finderMain.style.width = `${anchoBar}px`
//variables 2
let fuera = 1;
let dentro = 0;
//variables 3
let fueraF = 1;
let dentroF = 0;
//LISTENERS
window.addEventListener("resize",screenWidth)
pinterestIconPage.addEventListener("click",()=>{
    window.location.href = 'https://www.pinterest.com.mx/'
})
finder.addEventListener("mouseenter",()=>{
    dentro = 1;
    fuera = 0;
})
finder.addEventListener("mouseleave",()=>{
    fuera = 1;
    dentro = 0;
})
document.addEventListener("click",()=>{
    if((fuera == 1) && (dentro == 0)){
        background.style.display = "none"
    } else {
        background.style.display = "block"
    }
})

buttonStart.addEventListener("click", ()=>{
    if(window.innerWidth <= 900){
        if(estado == 0){
            estado = 1;
            buttonStart.classList.add("button-startTwo")
            buttonStartText.classList.add("button-start-Texto")
            firstArrow.style.fill = "white"
            fatherPopUp.style.display = "block"
        } else {
            cerrarPop();
        }
    }
})

finder.addEventListener("click", cerrarPop)

window.addEventListener("resize",()=>{
    if(window.innerWidth > 900){
        cerrarPop();
    }
    // if(window.innerWidth < 391){
    //     finderMain.style.width = "50px"
    // }
})

function cerrarPop(){
        buttonStart.classList.remove("button-startTwo")
        buttonStartText.classList.remove("button-start-Texto")
        firstArrow.style.fill = "black"
        fatherPopUp.style.display = "none"
        estado = 0;
}


buttonStart.addEventListener("mouseenter",()=>{
    dentroF = 1;
    fueraF = 0;
})

buttonStart.addEventListener("mouseleave",()=>{
    fueraF = 1;
    dentroF = 0;
})

document.addEventListener("click",()=>{
    if(fueraF == 1 && dentro == 0){
        buttonStart.classList.remove("button-startTwo")
        buttonStartText.classList.remove("button-start-Texto")
        firstArrow.style.fill = "black"
        fatherPopUp.style.display = "none"
        estado = 0
    }
})



// Creando función de anchura para finder
function screenWidth(){
    anchoActual = window.innerWidth;
    if(anchoActual > 900){
        anchoBar = (anchoActual*0.99)-495.350626; //ecuación de la recta para la anchura de finder
        finderMain.style.width = `${anchoBar}px` //la sentencia acepta solo string
    } 
}

