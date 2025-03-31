const datos =[
    {'materia':'programacion Web',
        'calificacion':70
    },
    {
        'materia':'Base de datos',
        'calificacion':80
    }
    ,
    {
        'materia':'ingles',
        'calificacion':90
    }
    ,
    {
        'materia':'programacion Movil',
        'calificacion':100
    }
    ,
    {
        'materia':'robotica',
        
        'calificacion':50
    }
    ,
    {
        'materia':'ingles2',
        'calificacion':60
    }
    ,
    {
        'materia':'programacion Web2',
        'calificacion':40
    }
    ,
    {
        'materia':'logica computacional',
        'calificacion':30
    }
    ,
    {
        'materia':'programacion2',
        'calificacion':20
    }
    ,
    {
        'materia':'base de datos2',
        'calificacion':10
    }
 
];
let materiaSeleccionada=``;
const NotaAprobacion=51;
for (let i=0; i<datos.length && NotaAprobacion == ''; i++){
    if(datos[i].calificacion<=NotaAprobacion){
        materiaSeleccionada=datos[i].materia;
    }
}
if(materiaSeleccionada==''){
    console.log('No hay materias aprobadas');
}
else{
        console.log(`La materia seleccionada es ${materiaSeleccionada}`);
}