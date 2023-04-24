// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo
//    como el de más abajo, de altura el número introducido.

// *
// **
// ***
// ****
// *****

const readlineSync = require("readline-sync");

const addCaracter = readlineSync.question("Ingrese caracter a multiplicar: ");

function agregarCar(){
    for(i = 0; i <= 5; i++){
        console.log(addCaracter.repeat(i));
    } return " ";
}

console.log(agregarCar());