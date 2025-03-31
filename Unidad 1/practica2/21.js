const datos = [{ valor: 10 }, { valor: 20 }, { valor: 30 }];
const propiedad = "valor";
let suma = 0;
for (const obj of datos) {
    suma += obj[propiedad];
}
console.log("Suma de valores:", suma);