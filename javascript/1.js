// Tipo de Variables

// Antiguo Var
nombre = "Juan";
// Inmutable
const nombre2 = "Juan";
// Solo vive dentro del Contexto (Ejem: una funcion) Mutable
let nombre3 = "Juan";

// Tipo de Datos
const string = "palabra";
const int = 2;
const boolean = false;

// colecciones (avanzado)
const array = ["1", "2", "3", "4", "5"];
const objeto = { "numero": "uno", "valor": 1 };

// Funciones en JS

const number1 = 2;
const number2 = 4;

// funcion clasica
function sumarNumeros(number1, number2) {
    const result = number1 + number2;
    return result
}

// funcion de flecha

const sumarNumeros2 = (number1, number2) => {
    const result2 = number1 + number2;
    return result2
}

// funcion de flecha corta
const sumarNumeros3 = (number1, number2) => number1 + number2

// definimos esta funcion para que se muestre en el navegador, de forma de pruebas
// ventana de alerta
alert(sumarNumeros(number1, number2));
alert(sumarNumeros2(number1, number2));
alert(sumarNumeros3(number1, number2));
// consola del navegador
console.log(sumarNumeros);

