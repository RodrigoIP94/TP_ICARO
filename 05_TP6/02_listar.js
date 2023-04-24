// 2. En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y 
//    crear una función reciba por parámetro una categoría liste los productos de esa categoría.

const readArchive = require("./dataBase");
let buscarCat = process.argv[2];


function listarCat(){
    let elementos = [];
    
    switch (buscarCat) {
        case "Lacteos":
            readArchive.forEach((buscarCat) => {
                if (buscarCat.categoria === "Lacteos") {
                  elementos.push(buscarCat.nombre);
                }
              });
           break;
        case "Bebidas":
            readArchive.forEach((buscarCat) => {
                if (buscarCat.categoria === "Bebidas") {
                  elementos.push(buscarCat.nombre);
                }
              });
           break;
        case "Snacks":
            readArchive.forEach((buscarCat) => {
                if (buscarCat.categoria === "Snacks") {
                  elementos.push(buscarCat.nombre);
                }
              });
            break;
        default: 
            return 'La categoria ingresada no es valida';
           break;
     }
if(elementos.length === 0){
    return 'No hay productos en la categoria indicada';
}else{
    return "Los productos disponibles son: " + elementos.join(", ")
}
}


console.log(listarCat())


// SOLUCION 2


// function listarCat(categoria) {
//     let elementos = [];
//     for (let i = 0; i < readArchive.length; i++) {
//       if (readArchive[i].categoria === categoria) {
//         elementos.push(readArchive[i].nombre);
//       }
//     }
//     if (elementos.length === 0) {
//     return "No hay productos disponibles en esa categoría.";
//     } else {
//     return "Los productos disponibles en esa categoría son: " + elementos.join(", ");
//     }
// }

// console.log(listarCat(buscarCat));