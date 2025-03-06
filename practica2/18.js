const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function esPrimo(n) { 
    for(let i=2; i<n;i++) if (n%i==0) return false;
return n >1;
}
const numerosPrimos = numeros.filter(esPrimo);
console.log("el numero es primo",numerosPrimos)