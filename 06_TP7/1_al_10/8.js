// ## 8. Sumar rango de números

// Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y número final. La función debe retornar
//  la suma de los números en ese rango (incluyéndolos).

// **Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.


// escribe tu respuesta acá

function sumarRango(numInicial, numFinal){
    let sumaArray = [];
    let numeros = numInicial < numFinal;
    switch (numeros){
        case true:
            for(let i = numInicial; i<= numFinal; i++){
                sumaArray.push(i);
            }
            let resultado = sumaArray.reduce((acum, elemento) => acum + elemento, 0);
             return resultado;
             break;
        case false:
            return 0;
            break
    }
}


// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0