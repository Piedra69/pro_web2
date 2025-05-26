// Resuelve los siguientes ejercicios de lógica con java script
// 3.- Escribe una función que reciba un número y devuelva su versión invertida.

// link de numeros random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// FUNCIONES

function invertirNumero(numero) {
    let numeroComoTexto = numero.toString();
    let numeroInvertidoTexto = "";

    // el -1 por que se inicia de 0 y no de 1
    for (let i = numeroComoTexto.length - 1; i >= 0; i--) {
        numeroInvertidoTexto += numeroComoTexto[i];
    }

    return numeroInvertidoTexto;
}

function generarNumeroAleatorio() {
    // * 100000 el rango el cual quieres
    return Math.floor(Math.random() * 100000);
}

// CODIGO

let numeroOriginal = generarNumeroAleatorio();
console.log("Número original:", numeroOriginal);
console.log("Número invertido:", invertirNumero(numeroOriginal));

