"use strict";

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#number");
const feedbackEl = document.querySelector(".feedback");
let tryEl = document.querySelector(".try");
let cont = 0;

function feedback(msg) {
  return (feedbackEl.innerHTML = msg);
}
function getRandomNumber(max) {
  let randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function showFeedback() {
  const numberInput = inputEl.value;
  const number = parseInt(numberInput);
  if (number > randomNumber) {
    feedback("demasiado alto");
  } else if (number < randomNumber) {
    feedback("demasiado bajo");
  } else if (number === randomNumber) {
    feedback("ERES UNA GANADORA!!!");
  }
}
function showCounter() {
  cont += 1;
  tryEl.innerHTML = cont;
}
function handlerCompareNumber() {
  showFeedback();
  showCounter();
}
btnEl.addEventListener("click", handlerCompareNumber);

// logic function compareNumber//
//recoger el valor que tiene input cuando hago click.
//cambiar el string del input a number
// si el número del input es mayor al número random entoncens en el feedback  debe decir en pantalla: 'demasiado bajo"
//si el número del input es menor al número random entonces en el feedback deberá decir: 'demasiado alto'
// si el número del input es igual al random en el deedback deberá decir que se ha ganado el juego.

//contador:
//el contador deberá comenzar en 0 y cada que se ejecute la función deberá sumar uno.
// el espacio destinado al contador (try) deberá mostrar el contador en pantalla.
