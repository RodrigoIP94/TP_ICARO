let arrayVacio = [];

for(let i = 1; i <= 15; i++){
    let numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    arrayVacio.push(numeroRandom);
}

console.log("Lista = ", arrayVacio);