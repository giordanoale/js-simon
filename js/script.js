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
var utente = [];

setTimeout(function () {
  var j = 0;
  while (j < 5) {
    var numUtente = parseInt(prompt("Digita uno dei numeri che ricordi"));
    if (!(utente.includes(numUtente))) {
      utente.push(numUtente);
      j++
    }
  }

  console.log(utente);

// 5. Controllo quali numeri sono giusti e quali sono errati
  var esatti = [];
  var sbagliati = [];

  for (var k = 0; k < utente.length; k++) {
    utente[k];
    console.log(utente[k]);
    if (numeri.includes(utente[k])) {
      esatti.push(utente[k]);
    } else {
      sbagliati.push(utente[k]);
    }
  }

// 6. Comunico i risultati all'utente
  console.log("Hai indovinato questi numeri: " + esatti);
  if (!(sbagliati.length == 0)) {
    console.log("Hai sbagliato questi numeri: " + sbagliati);
  }

}, 1000);
