document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mainButton");
    const tituloProducto = document.querySelector(".titulo");
    const imagenProducto = document.querySelector(".producto-img");

    // Cambia el texto del botón cuando se hace clic
    button.addEventListener("click", function () {
        button.textContent = "¡Gracias por hacer clic!";
    });

    // Muestra un mensaje con el nombre del producto
    tituloProducto.addEventListener("click", function () {
        alert("Has seleccionado: " + tituloProducto.textContent);
    });

    // Cambia la imagen cuando el mouse pasa sobre ella
    imagenProducto.addEventListener("mouseover", function () {
        imagenProducto.src = "carro2.jpg"; // Nueva imagen
    });

    // Restaura la imagen original cuando el mouse sale
    imagenProducto.addEventListener("mouseout", function () {
        imagenProducto.src = "carro1.jpg";
    });
});
