// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Il biglietto andrà stampato in pagina! :occhiolino: Ma controllate prima che tutto il codice funzioni !!!!
const km = parseInt(prompt("Quanti km vuoi percorrere"));
const eta = parseInt(prompt("Quanti anni hai?"));
const prezzoKm = 0.21;
const prezzoBt = prezzoKm * km;
const prezzoM = prezzoBt * 0.8;
const prezzoA = prezzoBt * 0.6;
console.log(km)
console.log(eta)
console.log(prezzoBt)
if(eta>65){
    console.log(prezzoA.toFixed(2))
    document.getElementById("testo").innerHTML = "il biglietto costerà"+" " + prezzoA.toFixed(2)+"€" ;
} else if(eta<18){
    console.log(prezzoM.toFixed(2))
    document.getElementById("testo").innerHTML = "il biglietto costerà"+" " + prezzoM.toFixed(2)+"€" ;
} else{
    console.log(prezzoBt.toFixed(2))
    document.getElementById("testo").innerHTML = "il biglietto costerà"+" " + prezzoBt.toFixed(2)+"€" ;
}
