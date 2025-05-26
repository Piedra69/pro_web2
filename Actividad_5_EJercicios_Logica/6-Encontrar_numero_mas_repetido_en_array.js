// Resuelve los siguientes ejercicios de lógica con java script
// 6.- Encontrar el número que más se repite en un array

// FUNCIONES

function encontrarNumeroMasRepetido(listaDeNumeros) {
    let conteoDeNumeros = {};
    let numeroMasRepetido = null;
    let masFrecuente = 0;

    for (let numero of listaDeNumeros) {

        // AGREGAR Y CONTAR LOS NUMEROS

        // si esta en la lista del objeto
        if (conteoDeNumeros[numero]) {
            conteoDeNumeros[numero]++;
        } else {
            // si no esta entonces se agrega al objeto y se le asigna 1 vez 
            conteoDeNumeros[numero] = 1;
        }

        // SABER CUAL ES EL NUMERO MAS FRECUENTE 

        if (conteoDeNumeros[numero] > masFrecuente) {
            masFrecuente = conteoDeNumeros[numero];
            numeroMasRepetido = numero;
        }
    }

    return numeroMasRepetido;
}

// CODIGO

let listaDeNumeros = [3, 5, 3, 2, 8, 3, 2, 5, 5, 5, 7, 8, 8, 8, 8];
console.log("Número más repetido:", encontrarNumeroMasRepetido(listaDeNumeros)); 
// Respuesta 8

/* 

PRUEBITAS :D

function encontrarNumeroMasRepetido(listaDeNumeros) {
    let conteoDeNumeros = {};
    let numeroMasRepetido = null;
    let masFrecuente = 0;

    for (let numero of listaDeNumeros) {

        // AGREGAR Y CONTAR LOS NUMEROS

        // si esta en la lista del objeto
        if (conteoDeNumeros[numero]) {
            conteoDeNumeros[numero]++;
        } else {
            // si no esta entonces se agrega al objeto y se le asigna 1 vez 
            conteoDeNumeros[numero] = 1;
        }

        console.log(conteoDeNumeros);
        console.log("----------------------------------------------");

        // SABER CUAL ES EL NUMERO MAS FRECUENTE 

        if (conteoDeNumeros[numero] > masFrecuente) {
            masFrecuente = conteoDeNumeros[numero];
            numeroMasRepetido = numero;
        }
        console.log(conteoDeNumeros);
        console.log("----------------------------------------------");
    }

    console.log(conteoDeNumeros);
    console.log("----------------------------------------------");

    return numeroMasRepetido;
}

// CODIGO

let listaDeNumeros = [3, 5, 3, 2, 8, 3, 2, 5, 5, 5, 7, 8, 8, 8, 8];
console.log("Número más repetido:", encontrarNumeroMasRepetido(listaDeNumeros)); 
// Respuesta 8

*/