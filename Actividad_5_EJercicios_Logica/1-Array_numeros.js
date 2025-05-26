// Resuelve los siguientes ejercicios de lógica con java script
// 1.-Dado un array de números, devuelve un objeto con la cantidad de números pares e impares..

// FUNCIONES
const EsPar = (numero) => {
    if (numero % 2 == 0){
        return true
    }
    else{
        return false
    }
};

// CODIGO

let array_Enteros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let pares = 0, impares = 0;

for(let i = 0; i < array_Enteros.length; i++){
    let respuesta = EsPar(array_Enteros[i]);
    if(respuesta == true){
        pares ++;
    }
    else{
        impares ++;
    }
};

let array_Objetos = [
    {
        'Cantidad de numeros PARES': pares,
        'Cantidad de numeros IMPARES': impares
    }
];

console.log("El array de numeros es");
console.log(array_Enteros);
console.log("-------------------------------------------------------------");
console.log("El objeto con la cantidad de pares e impares es");
console.log(array_Objetos);