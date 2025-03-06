const ciudadesDisponibles=new Array("Santiago","Bogota","Lima","Montevideo");
const precioPasaje= new Array(200,300,100,400);
const precioDisponible=210;
let i=0;
while(precioPasaje[i]>precioDisponible && i<ciudadesDisponibles.length){
    i++;
}
    if(i==ciudadesDisponibles.length){
        console.log("no existen pasajes");
    }
    else{
        console.log("existen pasajes: "+ciudadesDisponibles[i]);
    }
