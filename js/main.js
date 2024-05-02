
let grid = document.getElementById("grid")
let start = document.getElementById("start")
let select = document.getElementById("difficulty")

//inizio funzione che mi crea il quadrato
function createSquare(qualcosa) {
    //creo una variabile e creo un div
    let quadrato = document.createElement("div")
    //aggiungo una class al div con variabile quadrato
    quadrato.classList.add("square")
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