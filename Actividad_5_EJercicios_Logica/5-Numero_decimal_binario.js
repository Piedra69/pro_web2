// Resuelve los siguientes ejercicios de lógica con java script
// 5.-Escribe una función que convierta un número decimal a binario.

// FUNCIONES

function convertirDecimalABinario(numeroDecimal) {
    if (numeroDecimal == 0) {
        return "0";
    }

    let numeroBinario = "";
    let numeroActual = numeroDecimal;

    while (numeroActual > 0) {
        let residuo = numeroActual % 2;
        numeroBinario = residuo + numeroBinario;
        // math.floor devuelve el mayor entero
        numeroActual = Math.floor(numeroActual / 2);
    }

    return numeroBinario;
}

// CODIGO

// Con la funcion elaborada

console.log("Los numeros de decimal a binario: ");
console.log("Numero 10 en binario es igual a: ", convertirDecimalABinario(10)); // 1010
console.log("Numero 25 en binario es igual a: ", convertirDecimalABinario(25)); // 11001
console.log("Numero 50 en binario es igual a: ", convertirDecimalABinario(50)); // 110010

console.log("----------------------------------------------");

// Mediante una sola linea codigo (como menciono que se podia hacer)

console.log("Los numeros de decimal a binario METODO INGENIERA ANGELA: ");
let numero10 = 10, numero25 = 25, numero50 = 50;
console.log("Numero 10 en binario es igual a: ", numero10.toString(2)); // 1010
console.log("Numero 25 en binario es igual a: ", numero25.toString(2)); // 11001
console.log("Numero 50 en binario es igual a: ", numero50.toString(2)); // 110010


/*

// PRUEBITAS :D

let numeroDecimal = 10;

if (numeroDecimal === 0) {
    return "0";
}

let numeroBinario = "";
let numeroActual = numeroDecimal;

while (numeroActual > 0) {
    let residuo = numeroActual % 2;
    console.log("-----------------");
    console.log(residuo);
    console.log("-----------------");
    numeroBinario = residuo + numeroBinario;
    console.log(numeroBinario);
    numeroActual = Math.floor(numeroActual / 2);
    console.log("-----------------");
    console.log(numeroActual);
}
console.log("-----------------");
console.log(numeroBinario);

*/