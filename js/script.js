/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// creare il timer
// creare 5 prompt che chiederanno i numeri da ricordare
// verificare se le risposte corrispondono ai numeri estratti

// intercetto il div dove stampare l'output
const numbersBox = document.querySelector('.numbers');
console.log(numbersBox);


//salvo il ciclo in una funzione
function getRandomNumbers(){
  
  // ciclo la funzione per 5 volte per crere 5 numeri casuali
  const nTot = 5;
  
  for(let i=0; i < nTot; i++){
    
    // salvo in una variabile la funzione che genera un numero casuale
    let randomNumber = generateRandomNumber(1,100);
    console.log(randomNumber);
  }

}



/*--------------------
FUNCTIONS
---------------------*/

// genero la funzione per la creazione di numeri random
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



