//  Functions

let deudaLuis = 140;
deudaLuis = deudaLuis-35;
console.log(deudaLuis)

console.log(Math.max(2,4));

// Condicionales
let numero="Sandía";

if (!Number.isNaN(numero)){
    console.log("Tu número es la raiz cuadrada de: " + numero*numero);
} else {
    console.log("Hey no me diste un número");
}

let numberlop =0;
while(numberlop<=12){
    console.log(numberlop)
    numberlop=numberlop+2
}

let yourName;
do{
    yourName=prompt("Who are you?");
} while(!yourName);
console.log(yourName);

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}