
let grid = document.getElementById("grid")
let start = document.getElementById("start")
let select = document.getElementById("difficulty")
//creo variabile bomb per le bombe che creerò con generatori di numeri random
let bomb = ""
//creo variabile contatore per ciclo while
let numberBomb = 1
//creo variabile dove pusho la lista di numeri che devo associare alle bombe
let arrayBomb = []
//Creo variabile per calcolare il punteggio
let punteggio = 0

//inizio funzione che mi crea il quadrato
function createSquare(contatore) {
    //creo una variabile e creo un div
    let quadrato = document.createElement("div")
    //aggiungo una class al div con variabile quadrato
    quadrato.classList.add("square")
    //aggiungo a square la classe per icona bombetta in ogni square
    quadrato.classList.add("fa-solid")
    quadrato.classList.add("fa-bomb")

    //creo l'evento che quando l'utente prende la bomba si colora di rosso e scatta un alert in pagina
    quadrato.addEventListener("click", function () {
        if (arrayBomb.includes(contatore)) {
            quadrato.classList.add("red")
            quadrato.innerText = contatore
            alert(`HAI PERSO, il tuo punteggio totale è: ${punteggio} RICARICA LA PAGINA`)
            console.log(`Hai trovato la bomba n. : ${contatore}`)
            console.log(`Le bombe erano le n. : ${arrayBomb}`)
            punteggio = 0
            grid.innerHTML = "RICARICA LA PAGINA"
        }
        // se invece non prende la bomba si colora di azzurro e mi aggiorna il risultato totale
        else {
            quadrato.innerText = contatore
            quadrato.classList.add("azure")
            punteggio++
            console.log("il tuo punteggio attuale è: " ,punteggio)
        }
    })
    //la funzione mi ritorna quadrato che poi vado a richimare fuori
    return quadrato
}
 
start.addEventListener("click", function () {
    grid.innerHTML = ""
    if (select.value == "easy") {
        //Inserisco il ciclo while che mi crea 16 bombette random senza creare doppioni e finche la lista non ha 16 numeri perchè come condizione ho messo lunghezza della lista
        while (arrayBomb.length <=15){
            bomb = Math.floor(Math.random() * 100) + 1;
            //se la lista include già quel numero allora non lo pusha
            if(arrayBomb.includes(bomb)){
            
            }
            //sennò se nella lista quel numero non ce pusha il numero nella lista 
            else{
                arrayBomb.push(bomb)
            }
            numberBomb++
        }
        console.log(select.value)
        for (let i = 1; i <= 100; i++) {
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            
            //appendo alla griglia in html square
            grid.append(square)
        }
    }
    else if (select.value == "medium") {
        while (arrayBomb.length <=15){
            bomb = Math.floor(Math.random() * 81) + 1;
            if(arrayBomb.includes(bomb)){
            }else{
                arrayBomb.push(bomb)
            }
            numberBomb++
        }
        console.log(select.value)
        for (let i = 1; i <= 81; i++) {
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            square.classList.add("square-9")
            //appendo alla griglia in html square
            grid.append(square)
        }
    }else if (select.value == "hard") {
        while (arrayBomb.length <=15){
            bomb = Math.floor(Math.random() * 49) + 1;
            if(arrayBomb.includes(bomb)){
            }else{
                arrayBomb.push(bomb)
            }
            numberBomb++
        }
        console.log(select.value)
        for (let i = 1; i <= 49; i++) {
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            square.classList.add("square-7")
            //appendo alla griglia in html square
            grid.append(square)
        }
    }
})