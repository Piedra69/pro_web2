const numeros = [1, 3, 3, 4, 5, 3, 2, 4, 4, 4];
const conteo = {};
let numeroMasRepetido = numeros[0];
let maxRepeticiones = 0;
 
for (const num of numeros) {
    if (!conteo[num]) {
        conteo[num] = 1;
    } else {
        conteo[num]++;
    }

    if (conteo[num] > maxRepeticiones) {
        maxRepeticiones = conteo[num];
        numeroMasRepetido = num;
    }
}

console.log("Número más repetido:", numeroMasRepetido);