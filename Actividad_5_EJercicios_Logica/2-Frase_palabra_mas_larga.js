// Resuelve los siguientes ejercicios de lógica con java script
// 2.- Dada una frase, encuentra la palabra más larga.

// FUNCIONES

function palabraMasLarga(frase) {
    // Generar un array de palabras de la cadena de la frase
    let palabras = frase.split(" ");
    let palabraLarga = ""; 
    
    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }
    
    return palabraLarga;
}

// CODIGO

let frase = "Solo con el corazon se puede ver la verdad, lo que es esencial es invisible a los ojos";
console.log("La frase mas larga es: " + palabraMasLarga(frase));