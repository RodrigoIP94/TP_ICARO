// ## 3. IMC (ïndice de masa corporal)

// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: `peso / altura^2`

// Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

// - "Bajo de peso" si el BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30


// escribe la función bmi acá

////////// SOLUCION SWITCH //////////

function bmi(peso, altura){
    operacion = (peso / (altura ** 2).toFixed(2));
    resultado = parseFloat(operacion);
    switch (true) {
        case resultado < 18.5:
            return 'el paciente esta bajo en peso';
            break;
        case resultado > 18.5 && resultado <= 24.9:
            return 'el paciente esta en su peso normal';
            break;
        case resultado > 25 && resultado <= 29.9:
            return 'el paciente tiene sobrepeso';
            break;
        case resultado >= 30:
            return 'El paciente tiene obesidad';
            break;
        default:
            return 'porfavor reingrese los datos del paciente';
            break;
    }
}
////////// SOLUCION IF //////////

// function bmi(peso, altura){
//     resultado = (peso / (altura ** 2));
//     //resultado = parseFloat(operacion);
//     console.log(resultado);
//     if (resultado <= 18.5){
//         return 'El paciente esta bajo en peso';
//     }else if(resultado > 18.5 && resultado <= 24.9){
//         return 'El paciente esta en su peso normal';
//     }else if(resultado > 25 && resultado <= 29.9){
//         return 'El paciente tiene sobrepeso';
//     }else if(resultado  >= 30){
//         return 'el paciente tiene obesidad';
//     }else{
//         return console.error('No se pudo realizar la operacion, porfavor reintentelo');
//     }
// }

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"