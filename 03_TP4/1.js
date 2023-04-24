// 1. Escribir una función a la que se le pase una cadena "nombre" y muestre por pantalla el saludo ¡hola nombre!.

const readlineSync = require("./00_utilidades/readline/node_modules/readline-sync");

const nombreSaludo = readlineSync.question("Ingrese un nombre: ");


function saludar(){
    return ("¡Hola " + nombreSaludo + "!");
}

console.log(saludar(nombreSaludo));

