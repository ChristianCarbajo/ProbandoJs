console.info("hoasda")
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
/////////////////////////////////////////////////////////////////////////////
//-----------------------------------ejercicio de switch-----------------------
/////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////
//--------------------pop,push,splice,shift------------------------------
//////////////////////////////////////////////////////////////////////

// let candidatos = ["Martín", "Pablo", "Eugenio", "Ana","Guadalupe"]

// candidatos.splice(2,1) 

// console.info(candidatos)

//------funcion de aleatoriedad--------


// let candidatos = ["Martín","Pablo", "Eugenio", "Ana", "Guadalupe", "Jonas"]
// let muertos = []
// candidatos.forEach(candidatosFunction)
// //muertos.forEach(muertosFunction)
// function getRandomInt(max) {
//    return Math.floor(Math.random() * max);
// }

// //console.info(getRandomInt(candidatos.length))

// //---------------------------------------------

// button1.onclick = function muerte() {
//    let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
//    muertos.push(muerto)
//    document.getElementById("titulo2").innerHTML = "";
//    document.getElementById("titulo3").innerHTML = "";
//    vertical()
// }

//  function candidatosFunction (item, index) {

//   return document.getElementById("titulo2").innerHTML += index + ":" + item + "<br>"
//  }

// function muertosFunction (item, index) { 
//   document.getElementById("titulo3").innerHTML += index + ":" + item + "<br>"  
// }
// function vertical() {
//   candidatos.forEach(candidatosFunction)
//   muertos.forEach(muertosFunction) 
// }

//---------------------------------------------------------

// let candidatos = []
// let muertos = []

// candidatos.forEach(candidatosFunction)
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// button1.onclick = function muerte() {
//   let muerto = candidatos.splice(getRandomInt(candidatos.length), 1)
//   muertos.push(muerto)
//   document.getElementById("coders").innerHTML = "";
//   document.getElementById("death").innerHTML = "";
//   vertical()
// }

//   function candidatosFunction(item, index) {
//   return document.getElementById("coders").innerHTML +=item + "<br>"
// }

// function muertosFunction(item, index) {
//   document.getElementById("death").innerHTML +=item + "<br>"
// }

// function vertical() {
//   candidatos.forEach(candidatosFunction)
//   muertos.forEach(muertosFunction)
// }
//   button_añadir.onclick = function añadir() {
//   let palabras = document.getElementById('box').value.split(" ");
//   candidatos = candidatos.concat(palabras);
//   document.getElementById('box').value = ""; 
//   document.getElementById("coders").innerHTML = candidatos.join("<br>");

// }
// let imagenes = ["./Christian.jpg"]

// let positionX = []
// let posicion = []
// ultimaDir = []
// function miFuncionLoca(){
//     for (let i = 0; i < candidatos.length ; i++){
//       if (Math.random() > 0.8){
//         swapDir(i);
//       }
//        moverJugador(i);
//     }
//   }


//   function swapDir(i){

//     if (ultimaDir[i] == 'izq') 
//     {ultimaDir[i] = 'der';}

//     else {ultimaDir[i] = 'izq';}
//   }

//   function moverJugador(i){
//     if (ultimaDir[i] == 'izq') {posicion[i] -= 1;}
//     else {posicion[i] += 1;}
//   }



// ////////////////////////////////
//añadir elementos al html!!!!------------
////////////////////////////////////

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



///////////////////////////////////////////////////
//-------------------------------Funcion Ternaria-------------
///////////////////////////////////////////////

// function saleHotdogs(n){
//   return n<5 ? n*100 : (n>5, n<10) ? n*95 : n>=10 ? n*90 : ""
// }

// console.info (saleHotdogs(1))


//////////////////////////////////////////////////////
// //------------------------switch--------------------
//////////////////////////////////////////////////////////

// function whatDayIsToday(n){
//   // getDay() is a method of Date() - we will learn this later
//   var day=new Date().getDay(),x; 
//   switch (day){
//     case 0:
//       n="Today it's Sunday";
//       break;
//     case 1:
//       x="Today it's Monday";
//       break;
//     case 2:
//       x="Today it's Tuesday";
//       break;
//     case 3:
//       x="Today it's Wednesday";
//       break;
//     case 4:
//       x="Today it's Thursday";
//       break;
//     case 5:
//       x="Today it's Friday";
//       break;
//     case 6:
//       x="Today it's Saturday";
//       break;
//   }
//   return x;
// }
// console.info (whatDayIsToday())


// function howManydays(month){

// var days;
//   switch (month){
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//       days=30;

//       break;
//       case 2:
//       days=28;

//       break;
//       default:
//       days=31;   
//       break;           
//   }
//   return days;

// }
// console.info(howManydays(2))

///////////////////////////////////////////////
//--------------------LOCAL STORAGE-------------------
///////////////////////////////////////////////////

// let cartList = []



// const addToCart = () =>{

//  let recoveredData = localStorage.getItem('cart')
//  if(recoveredData == null){
//   cartList.push({name:"hola", id:1})
//   localStorage.setItem('cart', JSON.stringify(cartList))


// } else {
//   let data = JSON.parse(recoveredData)
//   let newDuck = {name:"hola", id:1}
//   data.push(newDuck)
//   localStorage.setItem('cart', JSON.stringify(data))
// }
// }

//////////////////////////////////////////
//-------------while y DO WHILE------------
/////////////////////////////////////////

// function padIt(str,n){
// while(n<0){
//   if(n%2===0){
//     str =str+ "*"
//   }
//   else {
//     str = "*" + str
//   }
//   n--
// }
//  return str
// }



// function sum1_100(){
//   var sum=0,num=1;    
//   while (num<=100){   

//     sum=sum+num;      

//     num=num+1;        

//   }
//   return sum;        
// }

////////////////
///--------FOR---------------
/////////////////////

// function pickIt(arr){
//   var odd=[],even=[];
//   for (var i=0;i<arr.length;i++){
//     if ((arr[i]%2)==0){
//       even.push(arr[i])
//     }else{
//       odd.push(arr[i])
//     }
//   }
//   return [odd,even];
// }

// console.info(pickIt([1,2,3,4,5]))

//-------------------------------------------------------------------------

// function grabDoll(dolls){
//   var bag=[];
//   for (let i=0; i<dolls.length; i++){
//     if(bag.length == 3){
//       break;
//     }
//    else if(dolls[i] == "Hello Kitty" || dolls[i]=="Barbie doll"){
//      bag.push(dolls[i])

//     }
//     }
//   return bag;
// }
// console.info(grabDoll(["Hello Kitty","action man","yonkis","budistas","Hello Kitty","Barbie doll", "Barbie doll"]))




// let ob =
//   { Our: "earth", is: "a", beautyful: "world" }




// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }

// showObjectKeys(ob)
// showObjectValues(ob)



// function giveMeFive(obj) {
//   let keyarr = []
//   for (var key in obj) {
//     if (key.length == 5) {
//       keyarr.push(key)
//     }
//     if (obj[key].length == 5) {
//       keyarr.push(obj[key])
//     } 
//   }
//   return keyarr
// }
// console.info(giveMeFive(ob))
//////----------------------------------------------------------------------------/////////

// function whatNumberIsIt(n){ 
//   if(n===Number.POSITIVE_INFINITY){
//     return "Input number is Number.POSITIVE_INFINITY"
//   }
//     if(n===Number.MAX_VALUE){
//       return "Input number is Number.MAX_VALUE"
//   }
//     if(n===Number.NEGATIVE_INFINITY){
//       return "Input number is Number.NEGATIVE_INFINITY"
//       }
//     if(n===Number.MIN_VALUE){
//       return "Input number is Number.MIN_VALUE"
//     }
//   if(Number.isNaN(n)){
//     return "Input number is Number.NaN"
//     }
//     else{
//      return "Input number is 100 " + n
//     }
  
// }

//-----------------------------------------