
function Largo(palabra1, palabra2){
    if(palabra1.length > palabra2.length){
        return(console.log ("palabra1 es mas larga"));
    }else if (palabra1.length < palabra2.length){
        return(console.log("palabra2 es mas larga"));
    } else {
        return(console.log("ambas string son iguales"));
    }
}

let resultado = Largo("tren", "edificio");
console.log(resultado);