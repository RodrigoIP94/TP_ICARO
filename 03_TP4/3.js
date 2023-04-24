const readlineSync = require("./00_utilidades/readline/node_modules/readline-sync/lib/readline-sync"); 

 let tipoVehiculo = readlineSync.question("BIENVENIDO!! Desea consultar disponibilidad de Auto(opc. 1)  o Moto(opc. 2)?: ");
 let marcaDeseada = readlineSync.question("Ingrese marca: ");


const moto = ["Benelli", "Honda", "Aprilia", "Yamaha", "Ducati", "CFmoto", "Norton", "BMW", "Kawasaki", "RoyalEnfield", "Indian"];
const auto = ["BMW", "Honda", "Renault", "VolksWagen", "Fiat", "Nissan", "Ford", "Audi", "Volvo"];

switch (tipoVehiculo) {
   case "2":
      tipoVehiculo = moto
      break;
   case "1":
      tipoVehiculo = auto
      break;
   default: 
   console.log("El numero ingresado no es valido, reintente la operacion");
      break;
}



function buscar(a, b){
   if(a.includes(b)){
    return "se encontro la marca en la galeria N° " + a.indexOf(b);
   }else{
    return "No hay disponibilidad de la marca solicitada";
   }
}


console.log(buscar(tipoVehiculo, marcaDeseada));