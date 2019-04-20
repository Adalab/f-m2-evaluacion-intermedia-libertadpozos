"use strict";

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#number");
const feedbackEl = document.querySelector(".feedback");
let tryEl = document.querySelector(".try");
let cont = 0;
const inputNameEl = document.querySelector('#name');
const pUsernameEl= document.querySelector('.username');

let objPlayers = {
name: "",
score:""
}



//RANDOM 
function getRandomNumber(max) {
  let randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//SAVE INNER HTML OF FEEDBACK
function saveInnerFeedback(msg) {
  return (feedbackEl.innerHTML = msg);
}
//sHOW FEEDBACK BY COMPARING DE RANDOM AND THE INPUT
function showFeedback() {
  const numberInput = inputEl.value;
  const number = parseInt(numberInput);
  if (number > randomNumber) {
    saveInnerFeedback("demasiado alto");
  } else if (number < randomNumber) {
    saveInnerFeedback("demasiado bajo");
  } else if (number === randomNumber) {
    saveInnerFeedback("HAS GANADOO!!!");
    objPlayers.score=cont+1;
    saveObjectCache();
    //SAVE COUNTER IN OBJECT AT THIS MOMENT BEACAUSE IT IS THE LAST TRY. 
  }
}
//COUNTER
function showCounter() {
  cont += 1;
  tryEl.innerHTML = cont;
  return cont;
}
//HANDLER 
function handlerCompareNumber() {
  showFeedback();
  showCounter();
}
btnEl.addEventListener("click", handlerCompareNumber);

//SHOW NAME ON SCREEN
function showInputinParagraph(){
  const inputNameContent= inputNameEl.value;
  pUsernameEl.innerHTML= "Hola " + inputNameContent + "!!!";
   if (inputNameContent===""){
   pUsernameEl.innerHTML="";
  }
}
inputNameEl.addEventListener("keyup", showInputinParagraph);

//SAVE CACHE

function saveNameLS(){
  const inputNameContent= inputNameEl.value;
  objPlayers.name=inputNameContent;
  saveObjectCache();
//localStorage.setItem('name', inputNameContent);
}
inputNameEl.addEventListener("keyup", saveNameLS);


//SAVE NAME AND SCORE IN OBJECT
 function saveObjectCache(){
  localStorage.setItem("Players", JSON.stringify(objPlayers));
}
 




// *******logic function compareNumber//
//recoger el valor que tiene input cuando hago click.
//cambiar el string del input a number
// si el número del input es mayor al número random entoncens en el feedback  debe decir en pantalla: 'demasiado bajo"
//si el número del input es menor al número random entonces en el feedback deberá decir: 'demasiado alto'
// si el número del input es igual al random en el deedback deberá decir que se ha ganado el juego.

//contador:
//el contador deberá comenzar en 0 y cada que se ejecute la función deberá sumar uno.
// el espacio destinado al contador (try) deberá mostrar el contador en pantalla.

//***** logic function: cada que escribo quiero que aparezca en el párrfo y en el local storage. 
//recojo el párrafo e input
// pongo botón de listener a input de keyup
//declaro función
  // lo que tenga el input.value que se escriba en el innerHTML de mi párrafo+ lo que ya está. 
  // lo que tenga en el input,value guardarlo en el local storage. 

  //hacer botón de reset que borre el local storage. 

  //hacer una lista de las personas que van jugando.