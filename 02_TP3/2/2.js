// 2. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).

const readlineSync = require("readline-sync");

let tuEdad = readlineSync.question("Bienvenido, ingrese su edad: ");

console.log(edad(tuEdad));

function edad(){
    for(i = 1; i <= tuEdad; i++){
        console.log("Ahora tenes: ", tuEdad, "Pero viviste: ", i);
    }
    return true;
}