let edadPasajero=17;
let edadPersona=17;
let conAcompanante=true;
const precioPasaje=1000;
const ciudadesDestino="Sucre";
const ciudadesDisponibles= new Array ("Santiago","Bogota","Lima","Monte Video");
if(precioPasaje===1000){
    console.log("El pasaje cuesta 1000");
}
console.log(`Verificando pasaje para ${ciudadesDestino}`);
if((ciudadesDestino.indexOf(ciudadesDestino)>1)&& (edadPasajero>=18)||conAcompanante){
     console.log("Pasaje Disponible");
}
else{
    console.log("No hay pasajes disponibles")
}