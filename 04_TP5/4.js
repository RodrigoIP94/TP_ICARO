// 4. Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la suma de todos los números del arreglo.


let miArray = [12, 45, 7, -5, 22, -16, 168];

function sumaArreglo(param){
    let resultado = 0;
    for(i = 0; i < miArray.length; i++){
        resultado = resultado + miArray[i];
    }
    return resultado;
}

console.log(sumaArreglo(miArray));


