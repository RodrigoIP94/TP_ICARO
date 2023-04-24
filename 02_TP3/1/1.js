// 1. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const readlineSync = require("readline-sync");

const userName = readlineSync.question("Bienvenido, ingrese su nombre: ");

console.log(userName);

for (i = 1; i <= 10; i++){
    console.log(i, "Bienvenido", userName);
    }