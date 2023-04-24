// 2. Escribir un programa que le pida al usuario que ingrese su nombre apellido edad y muestre un objeto con los datos ingresados.

// Ej:
// ```json
// {
//   nombre: "",
//   apellido: "",
//   edad: 0
// }


const readlineSync = require("readline-sync");

const nombre = readlineSync.question("Ingrese Nombre: ");
const apellido = readlineSync.question("Ingrese Apellido: ");
const edad = readlineSync.question("Ingrese edad: ");

const datos = {
        nombre: nombre,
        apellido: apellido,
        edad: edad   
}

function formulario() {
    for(let propiedades in datos){
        console.log(propiedades + ": " + datos[propiedades]);
    }
}

console.log(formulario(datos));



