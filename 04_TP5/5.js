// 5. Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos,
//    si son iguales devolver un String «son iguales».

const readlyneSync = require("./utilidades/node_modules/readline-sync");

console.log("ingrese 3 numeros que desea comparar");
const primerNum = readlyneSync.question("Ingrese el 1er numero: ");
const segundoNum = readlyneSync.question("ingrese el 2do numero: ");
const tercerNum = readlyneSync.question("ingrese el 3er numero: ");

function numeroMayor(num1, num2, num3){
    if(num1 > num2 && num1 > num3)
    {
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else if(num3 > num1 && num3 > num2){
        return num3;
    }else{
        return "Los numeros son iguales!";
    }
}

console.log(numeroMayor(primerNum, segundoNum, tercerNum));