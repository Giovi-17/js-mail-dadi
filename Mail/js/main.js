/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//Inserimento email
const userEmail = prompt("Inserire Email: ");

//Lista Email Autorizzate
const listEmail = ["sluiphav@googl.win", "peppino07@hotmail.com" ,"franco54@gmail.com", "luca24@live.com"];

//Controllo email utente
let found = false;

for(let i = 0; i < listEmail.length; i++){

    numListEmail = listEmail[i];

    if(userEmail === numListEmail){
        found = true;
    }

}

if(found === true){
    alert("Utente Autorizzato");
}else{
    alert("Utente NON Autorizzato");
}