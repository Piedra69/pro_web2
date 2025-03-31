const numeros = [1, 2, 3, 4, 5, 6];
const resultado = { pares: 0, impares: 0 };
for (const num of numeros) {
    if (num % 2 === 0) {
        resultado.pares++;
    } else {
        resultado.impares++;
    }
}
console.log("Pares:", resultado.pares);
console.log("Impares:", resultado.impares);