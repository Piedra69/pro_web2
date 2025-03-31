const numero = 3456287;
const numeroInvertido = parseInt(numero.toString().split("").reverse().join("")) * Math.sign(numero);
console.log("Número invertido:", numeroInvertido);