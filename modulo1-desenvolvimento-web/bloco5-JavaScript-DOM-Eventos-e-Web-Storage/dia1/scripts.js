const headerContainer = document.getElementById("header-container") 
headerContainer.style.backgroundColor = "rgb(0, 176, 105)"

const emergencia = document.getElementsByClassName("emergency-tasks")
for (let element of emergencia){
    element.style.backgroundColor = "rgb(255, 159, 132)"
}

//const faixaEmergencia = document.querySelectorAll(".emergency-tasks h3")   
for (let titulo of document.querySelectorAll(".emergency-tasks h3")){
    titulo.style.backgroundColor = "rgb(165, 0, 243)"
}

for (let naoEmergencia of document.getElementsByClassName("no-emergency-tasks")) {
    naoEmergencia.style.backgroundColor = "rgb(249, 219, 94)"
}

for (let titulos of document.querySelectorAll(".no-emergency-tasks h3")){
    titulos.style.backgroundColor = "rgb(35, 37, 37)"
}

for (let texto of document.querySelectorAll("body")){
    texto.style.textAlign = "center"
}

document.getElementById("footer-container").style.backgroundColor = "rgb(0, 53, 51)"