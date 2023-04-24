// ## 4. Imprimir un arreglo

// Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento en una línea a parte:


// escribe tu respuesta acá


function imprimirArreglo(a, b, c, d){
    arrayFinal = [];
    arrayFinal.push(a, b, c, d);
    for(let i = 0; i < arrayFinal.length; i++){
        console.log(arrayFinal[i]);
    }
}


// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));

// 1
// Hola
// 2
// Mundo
