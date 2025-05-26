const checkComplete = () =>{
    const i = document.createElement('i'); // creacion de un icono
    i.classList.add("far", "fa-check-square", "icon"); // estoy dando estilos al icono
    i.addEventListener("click", color);
    return i;
};

// funcion para crear el check
// <i class="fa-solid fa-square-check"></i>
const color = (evento) => {
    const element = evento.target
    // if else para deschequear
    if (element.classList.contains('fas')) {
        element.classList.remove('fas');
        element.classList.remove('completeIcon');
        element.classList.add('far');
    } else {
        element.classList.add('fas');
        element.classList.add('completeIcon');
        element.classList.remove('far');
    }
    /*
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far'); */
};

// exporta por defecto todo el codigo y lo llama dentro del java script
export default checkComplete;