//4. Dada un lista o array, escribir un programa que invierta sus elementos.


// const array = [1,"uno",2,"dos",3,"tres",4,"cuatro","etc..."];

// function darVuelta(elemento){
//     return elemento.reverse();
// }

// console.log(darVuelta(array));



////////////////////// SOLUCION 2 

const readlineSync = require("./00_utilidades/readline/node_modules/readline-sync");
const definirArray = readlineSync.question("ingrese los elementos para su array SIN ESPACIOS");

let array = definirArray

arrayConvert = array.split('');

console.log(arrayConvert.reverse());

"12345"