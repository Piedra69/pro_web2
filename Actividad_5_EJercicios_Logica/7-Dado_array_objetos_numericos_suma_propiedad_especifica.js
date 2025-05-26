// Resuelve los siguientes ejercicios de lógica con java script
// 7.- Dado un array de objetos con valores numéricos, suma una propiedad específica

// FUNCIONES

const datos = [
    {
        'materia':'Programacion Web I',
        'calificacion': 99
    },
    {
        'materia':'Base de Datos I',
        'calificacion': 99
    },
    {
        'materia':'Programacion II',
        'calificacion': 97
    },
    {
        'materia':'Ingles II',
        'calificacion': 97
    },
    {
        'materia':'Programacion Web II',
        'calificacion': 100
    },
    {
        'materia':'Base de Datos II',
        'calificacion': 100 
    },
    {
        'materia':'Programacion III',
        'calificacion': 100
    },
    {
        'materia':'Ingles III',
        'calificacion': 100 
    },
    {
        'materia':'Sistemas Operativos',
        'calificacion': 95
    },
    {
        'materia':'Programacion Movil I',
        'calificacion': 100
    }
];

let sumaPropiedadEspecificaCalificaciones = 0;

for(let i = 0; i < datos.length; i++){
    sumaPropiedadEspecificaCalificaciones += datos[i].calificacion;
};

console.log("Array de Objetos:", datos);
console.log("-----------------------------------------------------------------------------------------");
console.log("La suma de las calificaciones del Presi es: ", sumaPropiedadEspecificaCalificaciones);