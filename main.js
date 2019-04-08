'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  console.log('> ' + getRandomNumber(100));

  
  //Pulsar el botón de prueba y mostrar en la consola el número del input. 
  const btnEl=document.querySelector('.btn');
  const inputEl=document.querySelector('#number');
  const feedbackEl=document.querySelector('.feedback');
  const tryEl=document.querySelector('.try');

  //función
  function compareNumber(){
      const numberInput=inputEl.value;
      const number=parseInt(numberInput);
      console.log (number+getRandoNumber);//cómo obtengo el número que da getRandom Number 
    //   función:
      //contador que diga cuàntas veces se ha hecho intentos. 
     
        //si el número random es mayor al número dado entonces mostrar en la parte de feedback que el número es demasiado alto.
        // si es menor, mostrar que el número dado es demasiado bajo. 
        if (number<getRandomNumber){
            feedbackEl.innerHTML='demasiado alto ';
        }
        else{
            feedbackEl.innerHTML='demasiado bajo';
        }
      

  }
  
  //listener al btn de click
  btnEl.addEventListener('click', compareNumber);