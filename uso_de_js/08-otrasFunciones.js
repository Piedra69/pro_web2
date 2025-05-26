const ciudadesDisponibles = new Array("Santiago", "Paris", "Tokio", "Buenos Aires", "Lima", "Montevideo");

const paisesDisponibles = ["Colombia", "Chile", "Suiza", "Panama", "Bolivia"];

const cantidadCiudades = ciudadesDisponibles.length;

// Se puede llamar ya sea directo o almacenando en una variable
console.log(`En la lista existen ${cantidadCiudades} elementos`);
console.log(`En la lista existen ${cantidadCiudades.length} elementos`);

// Quitar el primer elemento de un array

// Eliminar el primer elemento de la lista .shift()
ciudadesDisponibles.shift();
console.log(`En la lista existen ${ciudadesDisponibles.length} elementos`);
console.log(ciudadesDisponibles);

// Quitar el ultimo elemento de un array

// Eliminar el ultimo elemento de la lista .shift()
ciudadesDisponibles.pop();
console.log(`En la lista existen ${ciudadesDisponibles.length} elementos`);
console.log(ciudadesDisponibles);

// Ordenar listas
console.log(ciudadesDisponibles.sort());

// Posicion de un elemento 
console.log(`En la lista existen ${paisesDisponibles.indexOf("Suiza")}`);

// Concatenar dos listas 
const listaPaisesCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesCiudades);