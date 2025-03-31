const datos=[

    {
        'materia':'PRogramcion web',
        'calificacion':70
    },
    {
       'materia':'Programcion III',
        'calificacion':60
    },
    {
        'materia':'Ingles',
         'calificacion':79
     },
     {
        'materia':'Programcion Movil',
         'calificacion':50
         
     },
     {
        'materia':'Base de datos',
         'calificacion':40
     },
     {
        'materia':'Sitemas Operativos',
         'calificacion':40
     },
     {
        'materia':'IoT',
         'calificacion':40

     },
     {
        'materia':'Programcion III',
         'calificacion':45
     }

];

let i=0;
const NotaAprobacion=51;
let materiaSeleccionada="";
do{
    if(datos[i].calificacion<=NotaAprobacion){
        materiaSeleccionada=datos[i].materia
        break;
    }
    i++
}while(i<datos.length && materiaSeleccionada=="")
    if(materiaSeleccionada==""){
        console.log("no aprobaste")

    }
    else{  
       console.log("aprobaste" + materiaSeleccionada);
    }
