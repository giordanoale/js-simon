// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Creo una funzione per generare numeri casuali
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2. Genero cinque numeri e li metto in un array
var numeri = [];
var i = 0

while (i < 5) {
  var numero = numeroRandom(1, 10);
  if (!(numeri.includes(numero))) {
    numeri.push(numero);
    i++
  }
}

console.log(numeri);

// 3. Mostro i 5 cinque numeri sullo schermo
alert("I numeri che devi ricordare sono i seguenti: " + numeri + ". Premi OK quando li hai memorizzati!");

// 4. Chiedo all'utente di digitare i 5 numeri
var utente;

setTimeout(function () {
  var j = 0;
  while (j < 5) {
    utente = parseInt(prompt("Digita uno dei numeri che ricordi"));
    if (numeri.includes(utente)) {
      j++;
    } else {
      alert("Hai perso! Ricarica la pagina per giocare di nuovo");
      break;
    }
  }
}, 1000);
