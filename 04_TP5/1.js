// 1. Dados 2 arrays **["Juan", "Dani"]** y **["Leo", "Monica", "Juliana"]**, escribir una función que
//    concatene "unifique" los dos array y devuelva un solo array **["Juan", "Dani", "Leo", "Monica", "Juliana"]**. 

const array1 = ["Juan", "Martin", "Pedro"];
const array2 = ["Julieta", "Priscila", "Maricel"];

function concatenar(var1, var2){
    let miArray = var1.concat(var2);
    return miArray;
}

console.log(concatenar(array1, array2));