// oppgave 1
/*
var tall = Math.round(Math.random()* 100);

while (true) {

    let brukertall = prompt("Skriv inn et tall mellom 1 og 100")

    if (tall < brukertall) {
        alert("Tallet er for stort")
    }
    else if (tall > brukertall) {
        alert("Tallet er for lavt")
    }
    else {
        alert("Du gjettet riktig")
    break;
    }
}
*/

// oppgave 2
/*
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        document.write(j + " ");
        
    }
        document.write(`<br>`);
}
*/

// oppgave 1 med css

let btn = document.getElementById(`btn`);
let output = document.getElementById(`outputtext`);

var number = Math.round(Math.random()*50);

btn.addEventListener(`click`, function () {
    let input = document.getElementById(`userInput`).value;
    if (input == number) {
        alert(`Du gjettet riktig, nummeret var ${number}`)
    }
    else if (input < number) {
        alert("Tallet er for lavt")
    }
    if (input > number) {
        alert("Tallet er for høyt")
    }
});