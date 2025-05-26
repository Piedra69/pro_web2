// Resuelve los siguientes ejercicios de lógica con java script
// 4.-Dado un array de números, devuelve solo los que sean primos.

// FUNCIONES

function esNumeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    if (numero == 2 || numero == 3) {
        return true;
    }

    if (numero % 2 == 0 || numero % 3 == 0) {
        return false;
    }

    for (let divisor = 5; divisor <= Math.sqrt(numero); divisor += 2) {
        if (numero % divisor == 0) {
            return false;
        }
    }

    return true;
}

function filtrarNumerosPrimos(numerosAleatorios) {
    let numerosPrimos = [];

    for (let numero of numerosAleatorios) {
        if (esNumeroPrimo(numero) == true) {
            numerosPrimos.push(numero);
        }
    }

    return numerosPrimos;
}

// CODIGO

let numerosAleatorios = [3, 8, 13, 17, 20, 23, 25, 29, 31, 35, 37, 40];
console.log("Números aleatorios:", numerosAleatorios);
console.log("Números primos:", filtrarNumerosPrimos(numerosAleatorios));

/*
PRUEBITAS :D

let numero = 17;
let res = "";

for (let divisor = 5; divisor <= Math.sqrt(numero); divisor += 2) {
    console.log(divisor);
    console.log(numero);
    console.log(Math.sqrt(numero));
    if (numero % divisor == 0) {
        res == "falso";
    }
}

console.log(res);

console.log(esNumeroPrimo(0)); 
console.log(esNumeroPrimo(1));  
console.log(esNumeroPrimo(2));  
console.log(esNumeroPrimo(3));  
console.log(esNumeroPrimo(4));  
console.log(esNumeroPrimo(5));  
console.log(esNumeroPrimo(29)); 
console.log(esNumeroPrimo(30)); 
*/
