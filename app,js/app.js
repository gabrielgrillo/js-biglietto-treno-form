// l programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere
// all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Utilizzate Bootstrap come libreria UI.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// Il recap dei dati e l’output del prezzo finale va stampato in pagina(formattato con massimo due decimali,
// per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

console.log("ciao")

//recuperiamo il form dal DOM
const formElement = document.getElementById('form')
// console.dir(formElement)

//recuperiamo gli elementi del form che verranno compilati
const kmElement = document.getElementById("text-km")
const etaElement = document.getElementById("inputEta")
const prezzoElement = document.getElementById('text-prezzo')


//assegniamo il listener dell'evento submit al form
//togliamo il funzionamento di default del form

formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    const km = kmElement.value
    // console.log(km)
    const eta = etaElement.value
    // console.log(eta)
})


//calcoliamo lo sconto da applicare
// -SE < 18
// - - sconto 20%
// - ALTRIMENTI SE > 65
// - - sconto 40%
// - ALTRIMENTI
// - - prezzo intero

