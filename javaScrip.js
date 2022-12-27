
//let image = document.getElementById("image")
//    d = document.getElementById("titulo")


// function aparecer() {
//    image.style.display = "block"

// }

// document.getElementById("button1").onclick = function () {
//    aparecer();
// }

//image.onclick = function ocultar() {
  // image.style.display = ("none")

//}
//-----------------------------------ejercicio de switch-----------------------
// let edadDeRaul = (17);
// let edadDeLucia = (20);
// let edadDeCarlos = (89);
// const nombre = "Raul";

// function validarEdad(edad) {
//     var resultado;
//   switch (true) {

//     case (edad >= 18 &&  edad < 70):
//       resultado = (" puede conducir");
//       break;
//     case (edad >= 70 &&  edad < 79):
//         resultado = (" deja la herencia y no conduzcas");
//       break;
//     case (edad >= 80):
//         resultado = (" deja la herencia y no conduzcas tas viejo");
//       break;
//     default:
//         resultado = (" no puede conducir tampoco");
//       break;
//   }

//   return resultado; 
// }

// console.info(validarEdad(edadDeCarlos));

//--------------------pop,push,splice,shift------------------------------

// let candidatos = ["Martín", "Pablo", "Eugenio", "Ana","Guadalupe"]

// candidatos.splice(2,1) 

// console.info(candidatos)

//------funcion de aleatoriedad--------


let candidatos = ["Martín","Pablo", "Eugenio", "Ana", "Guadalupe", "Jonas"]
let muertos = []
candidatos.forEach(candidatosFunction)
//muertos.forEach(muertosFunction)
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

//console.info(getRandomInt(candidatos.length))

//---------------------------------------------

button1.onclick = function muerte() {
   let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
   muertos.push(muerto)
   document.getElementById("titulo2").innerHTML = "";
   document.getElementById("titulo3").innerHTML = "";
   vertical()
}

 function candidatosFunction (item, index) {
  
  return document.getElementById("titulo2").innerHTML += index + ":" + item + "<br>"
 }

function muertosFunction (item, index) { 
  document.getElementById("titulo3").innerHTML += index + ":" + item + "<br>"  
}
function vertical() {
  candidatos.forEach(candidatosFunction)
  muertos.forEach(muertosFunction) 
}


















  
//añadir elementos al html!!!!------------

//document.body.onload = addElement;

// function addElement () {
//   // crea un nuevo div
//   // y añade contenido
//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Hola!¿Qué tal?");
//   newDiv.appendChild(newContent); //añade texto al div creado.

//   // añade el elemento creado y su contenido al DOM
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

