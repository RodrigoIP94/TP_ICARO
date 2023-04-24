// 3. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
//    todos los números impares desde 1 hasta ese número separados por comas.

const readlineSync = require("readline-sync");

let numEntero = readlineSync.question("Ingresa un numero positivo(*entero): ");

console.log(numImpares(numEntero));

function numImpares(){
    for(i = 0; i < numEntero; i++){
        if (i % 2 === 1 ){
           console.log(i);
        }else{
            return("no hay negativos en medio");
        }
    }
}

