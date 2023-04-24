// 4. En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js y crear una función
//    que me permita agregar un producto a la lista. Ingresando por parámetros, el id, nombre, descripcion,
//    categoria y precio. mostrarlo en un console.log


const archOrigen = require('./dataBase.json');
const fs = require('fs');

let id = process.argv[2];
let nombre = process.argv[3];
let descripcion = process.argv[4];
let categoria = process.argv[5];
let precio = process.argv[6];


function agregarProducto (id, nombre, descripcion, categoria, precio){
    let productoNuevo = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        categoria: categoria,
        precio: precio
    }
    archOrigen.push(productoNuevo);
    fs.writeFileSync('dataBase.json', `${JSON.stringify(archOrigen, null, 2)}` , (error) =>{
        if(error) throw error;
        console.log('Se introdujo el nuevo producto a su base de datos!');
    })
}

console.log(agregarProducto(id, nombre, descripcion, categoria, precio));


// Para probar introducir en consola: "node 04_agregar.js id nombre "descripcion" categoria precio(sin $)" //
