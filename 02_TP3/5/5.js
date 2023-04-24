// 5. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla
// una a una las letras de la palabra introducida empezando por la última.



const readlineSync = require("readline-sync");
const leerPalabra = readlineSync.question("Ingrese palabra deletrear en reversa: ");

function deletrear(){
    for(i = leerPalabra.length - 1 ; i >= 0; i--){
       console.log(leerPalabra[i]);
    }return " ";
}

console.log(deletrear(leerPalabra));
