// 1. Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, 
// retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

const readlineSync = require("./utilidades/node_modules/readline-sync");
let caracter = readlineSync.question("Ingrese el caracter que desea multiplicar: ");
let cantidad = readlineSync.question("ingrese el numero de veces que desea multiplicar el mismo: ");

function generarCaracteres(caracter, cantidad){
    let resultado = "";
    for(i = 0; i < cantidad; i++){
        resultado += caracter
    }
    return resultado;
}

console.log(generarCaracteres(caracter, cantidad));