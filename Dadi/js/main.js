/* Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//Generazione numero 1-6 random Computer
const numComputer = Math.floor(Math.random() * 6) + 1;

//Generazione numero 1-6 random Utente
const numUtente = Math.floor(Math.random() * 6) + 1;

//Comparazione dei numeri Computer-Utente e OUTPUT
alert("Il Computer ha inserito: " + numComputer + " e tu hai inserito: " + numUtente );

if(numComputer > numUtente){
    alert('Ha vinto il Computer');

}else if(numComputer < numUtente){
    alert('Hai vinto!');

}else{
    alert('Pareggio!');

}