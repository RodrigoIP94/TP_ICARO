// ## 5. Número de Likes

// Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// - 1400 se convierte en 1K
// - 34,567 se convierte en 34K
// - 7’456,345 se convierte en 7M.

// Si el número es menor a 1000 se debe devolver el mismo número como un string.


// escribe tu respuesta acá

////////// SOLUCION SWITCH //////////

function likes (numLikes){
    cant = numLikes;
    switch(true){
        case (cant <= 999):
            return cant + ' likes';
            break;
        case (cant >= 1000 && cant <= 9999):
            cant = numLikes / 1000;
            dosPrimeros = cant.toString().slice(0, 1);
            return dosPrimeros + 'k likes';
            break;
        case (cant >= 10000 && cant <= 999999):
            cant = numLikes / 1000;
            dosPrimeros = cant.toString().slice(0, 2);
            return dosPrimeros + 'k likes';
            break;
        case (cant > 1000000):
            cant = numLikes / 1000;
            dosPrimeros + cant.toString().slice(0, 2);
            return dosPrimeros + 'M Likes'
            break;
        default: console.error(Error, 'no se encontro respuesta logica para este valor, reingrese cantidad de likes');
    }
}


////////// SOLUCION IF //////////


// function likes(cant){
//     if(cant <= 999){
//         return cant + ' likes';
//     }else if( cant >= 1000 && cant <= 9999){
//         num = cant / 1000;
//         dosPrimeros = num.toString().slice(0, 1);
//         return dosPrimeros + 'k likes';
//     }else if( cant >= 10000 && cant <= 999999){
//         num = cant / 1000;
//         dosPrimeros = num.toString().slice(0, 3);
//         return dosPrimeros + 'k likes';
//     }else if (cant > 1000000){
//         num = cant / 1000;
//         dosPrimeros = num.toString().slice(0, 2);
//         return dosPrimeros + 'M likes';
//     }else{
//         return console.log(Error, 'no se encontro respuesta logica para este valor, reingrese cantidad de likes');
//     }
// }


// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"
console.log(likes('asd')); // "Error"