const ciudadesDestino="Sucre";
const ciudadesDisponibles= new Array ("Santiago","Bogota","Lima","Monte Video");
 
let edadPasajero=17;
let compania=false;
 
if(edadPasajero>=18 || compania){
    if(ciudadesDestino.indexOf(ciudadesDestino)>-1){
        console.log("Pasaje disponible");
    }
    else{
        console.log("ciudad no disponible");
    }
}else{
        if(edadPasajero>=16 && ciudadesDestino=="Sucre"){
            console.log("Pasaje Disponible");
        }
        else{
            console.log("Pasajero no cumple las reglas");
        }
    }