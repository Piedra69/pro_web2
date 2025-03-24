const Form = (()=>{
    //Recuoerando datos de formulario
    const form = document.querySelector(['data-form']);
    const inputTask = document.querySelector(['data-input-task']);
    const inputDescription = document.querySelector(['data-input-descripcion']);
    const date = document.querySelector(['data-input-fecha']);
    const inputPrioridad = document.querySelector(['data-input-prioridad']);
    // guardamos los datos como objetos
    const datosForm = ()=>{
        return{
            task: inputTask.value.trim(),
            descripcion : inputDescription.value.trim(),
            date : date.value.trim(),
            priority : inputPrioridad.value.trim(),
        };
    };
    const reset = ()=>{
        inputTask.value = '';
        inputDescription.value = '';
        date.value= '';
        inputPrioridad.value = '';
    }
    const setDatos = (callback)=>{
        // devuelve los datos para usarlos en la tabla
        form.addEventListener('submit', (evento) =>{
            evento.preventDefault();
            callback(datosForm());
            reset();
        });
    };
    return {setDatos};
})();
export default Form;