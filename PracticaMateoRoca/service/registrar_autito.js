import { autitoService } from "../service/autito-service.js";

const formulario = document.querySelector("[data-formulario-autos]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-input-nombre]").value;
    const precio = document.querySelector("[data-input-precio]").value;
    const caja = document.querySelector("[data-input-caja]").value;
    const gestion = document.querySelector("[data-input-gestion]").value;
    const color = document.querySelector("[data-input-color]").value;

    autitoService.crearAutito(nombre, precio, caja, gestion, color)
        .then(() => {
            alert("Autito registrado con éxito!");
            formulario.reset();
            window.location.href = "../screens/productos.html";
        })
        .catch(error => {
            alert("Error al registrar autito: " + error);
        });
});