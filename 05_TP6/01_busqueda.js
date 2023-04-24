// 1. En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js
//    y crear una función que acepte como parámetro un id numérico y devuelva el producto correspondiente.

// 3. En el archivo creado en el ejercicio 1, llamado busqueda.js, crear otra función que me permita
//    buscar los productos cuyos precios sean menores a un precio que pase por parámetro.

const readArchive = require("./dataBase");
let ejecutar = process.argv[2] 
let numer = process.argv[3]

//////////////////////////////////BUSQUEDA POR ID////////////////////////////////////////////////////////

function buscarId(numer){
    for(let i = 0; i < readArchive.length; i++){
        if (numer == readArchive[i].id){
            return readArchive[i].nombre;
        }
    }
    return 'La id ingresada no corresponde a ningun producto en stock';
}

///////////////////////////////////BUSQUEDA POR PRECIO///////////////////////////////////////////////////////

function buscarPrecio(numer){
    let resultados = [];

    for(let i = 0; i < readArchive.length; i++){
        if (numer > readArchive[i].precio){
            resultados.push(readArchive[i].nombre + ': $' + readArchive[i].precio);
        }
    }

        if (resultados.length == 0){
            return 'No se encontro un producto de menor precio al sugerido';
        }else{
            return resultados.join("\n");
        }

}

///////////////////////////////////SELECTOR DE EJECUCION/////////////////////////////////////////////////

switch (ejecutar) {
    case "buscarId":
        console.log(buscarId(numer));
        break;
    case "buscarPrecio":
        console.log(buscarPrecio(numer));
        break;
    default:
        console.log('la opcion seleccionada en el parametro [2] no es valida');
        break;
}


