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

// creo un array vuoto dove andranno i 5 numeri estratti
const arrayNumbers = [];

// ciclo per 5 volte per generare 5 numeri casuali
const nTot = 5;

for(let i=0; i < nTot; i++){
  
  // salvo in una variabile la funzione che genera un numero casuale
  let randomNumbers = generateRandomNumber(1,100);
  
  // pusho i numeri estratti nell'array vuoto
  arrayNumbers.push(randomNumbers);
  
}

console.log(arrayNumbers);

numbersBox.innerHTML = `${arrayNumbers}`;

/*--------------------
FUNCTIONS
---------------------*/

// genero la funzione per la creazione di numeri random
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};