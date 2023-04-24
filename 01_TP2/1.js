const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
let num3 = numeroRandom


if (num3 % 2 === 0){
    console.log(num3, "Es un numero par");
} else { 
    console.log(num3, "Es un numero impar");
}