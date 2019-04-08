'use strict';

const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('#number');
const feedbackEl = document.querySelector('.feedback');
let tryEl = document.querySelector('.try');
let cont = 0;

function getRandomNumber(max) {
  let randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}
const randomNumber = (getRandomNumber(100));
console.log(randomNumber);

function compareNumber() {
  const numberInput = inputEl.value;
  const number = parseInt(numberInput);
  if (number > randomNumber) {
    feedbackEl.innerHTML = 'demasiado alto ';
  }
  else if (number < randomNumber) {
    feedbackEl.innerHTML = 'demasiado bajo';
  }
  else if (number === randomNumber) {
    feedbackEl.innerHTML = 'ERES UNA GANADORA!!!';
  }
  cont += 1;
  tryEl.innerHTML = cont;
}
btnEl.addEventListener('click', compareNumber);
