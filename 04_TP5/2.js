// 2. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal 
//     (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.

const readlineSync = require("./utilidades/node_modules/readline-sync");
let letra = readlineSync.question("Ingrese la letra a inspeccionar: ");

arrayVocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function esVocal(param){
    if(arrayVocales.includes(param)){
        return true
    }else{
        return false
    }
}

console.log(esVocal(letra));