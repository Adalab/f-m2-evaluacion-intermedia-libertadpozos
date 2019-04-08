'use strict';

const btnEl=document.querySelector('.btn');
const inputEl=document.querySelector('#number');
const feedbackEl=document.querySelector('.feedback');
const tryEl=document.querySelector('.try');


function getRandomNumber(max) {
    let randomNumber= Math.ceil(Math.random() * max);
    return randomNumber; 
  }
  console.log('> ' + getRandomNumber(100));
  
  //función
function compareNumber(){
    const numberInput=inputEl.value;
    const number=parseInt(numberInput);

    //**** averiguar cómo tomo el randomNumber y trabajo con él aquí 
//         if (number<getRandomNumber){
//             feedbackEl.innerHTML='demasiado alto ';
//         }
//         else{
//             feedbackEl.innerHTML='demasiado bajo';
//         }
 }
  
   btnEl.addEventListener('click', compareNumber);


   //cómo obtengo el número que da getRandom Number 
    //   función:
      //contador que diga cuàntas veces se ha hecho intentos. 
        //si el número random es mayor al número dado entonces mostrar en la parte de feedback que el número es demasiado alto.
        // si es menor, mostrar que el número dado es demasiado bajo. 