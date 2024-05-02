
let grid = document.getElementById("grid")
let start = document.getElementById("start")
let select = document.getElementById("difficulty")
//creo variabile bomb per le bombe che creerò con generatori di numeri random
let bomb = ""
//creo variabile contatore per ciclo while
let i = 1
//creo variabile dove pusho la lista di numeri che devo associare alle bombe
let arrayBomb = []

//inizio funzione che mi crea il quadrato
function createSquare(qualcosa) {
    //creo una variabile e creo un div
    let quadrato = document.createElement("div")
    //aggiungo una class al div con variabile quadrato
    quadrato.classList.add("square")
    //aggiungo a square la classe per icona bombetta in ogni square
    quadrato.classList.add("fa-solid")
    quadrato.classList.add("fa-bomb")

    //creo l'evento che quando clicco sul quadrato mi aggiunge la class che su css ha background blue e con toggle quando clicco un quadrato blu mi ritorna con background normale
    quadrato.addEventListener("click", function () {
        if (quadrato.classList.contains("white")) {
            quadrato.innerHTML = ""
        }
        // se invece il quadrato ancora non contiene white allora gli mette sia white che il numero
        else {
            quadrato.innerText = qualcosa
        }
        quadrato.classList.toggle("white")
        //consolelog che mi dice che quadrato ho cliccato
        console.log("Ho cliccato", qualcosa)
    }
    )
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
                console.log("Le bombe sono la numero:" ,bomb)
                arrayBomb.push(bomb)
            }
            i++
        }
        console.log(select.value)
        for (let i = 1; i <= 100; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)

            //appendo alla griglia in html square
            grid.append(square)
        }
    }else if (select.value == "medium") {
        while (arrayBomb.length <=15){
            bomb = Math.floor(Math.random() * 81) + 1;
            if(arrayBomb.includes(bomb)){
            }else{
                console.log("Le bombe sono la numero:" ,bomb)
                arrayBomb.push(bomb)
            }
            i++
        }
        console.log(select.value)
        for (let i = 1; i <= 81; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
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
                console.log("Le bombe sono la numero:" ,bomb)
                arrayBomb.push(bomb)
            }
            i++
        }
        console.log(select.value)
        for (let i = 1; i <= 49; i++) {
            //Console log per stampare i numeri da 1 a 100 in console
            console.log(i)
            //Creo variabile square e gli dico che è uguale alla funziona che mi crea il quadrato e gli do il numero dell'indice del quadrato creato
            let square = createSquare(i)
            square.classList.add("square-7")
            //appendo alla griglia in html square
            grid.append(square)
        }
    }
})