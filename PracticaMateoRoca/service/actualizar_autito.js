import { autitoService } from "../service/autito-service.js";

const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    if(id == null) {
        alert("Erro al obtener el ID");
    }

    const nombre = document.querySelector("[data-input-nombre]");
    const precio = document.querySelector("[data-input-precio]");
    const caja = document.querySelector("[data-input-caja]");
    const gestion = document.querySelector("[data-input-gestion]");
    const color = document.querySelector("[data-input-color]");

    try {
        const autito = await autitoService.detalleAutito(id);
        
        if(autito.nombre && autito.precio && autito.caja && autito.gestion && autito.color) {
            nombre.value = autito.nombre;
            precio.value = autito.precio;
            caja.value = autito.caja;
            gestion.value = autito.gestion;
            color.value = autito.color;
        } else {
            throw new Error();
        }
    } catch(error) {
        console.log("Catch error", error);
        alert("Erro al obtener el ID");
    }
};

obtenerInfo();

const formulario = document.querySelector("[data-formulario-autos]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-input-nombre]").value;
    const precio = document.querySelector("[data-input-precio]").value;
    const caja = document.querySelector("[data-input-caja]").value;
    const gestion = document.querySelector("[data-input-gestion]").value;
    const color = document.querySelector("[data-input-color]").value;

    autitoService.actualizarAutito(nombre, precio, caja, gestion, color, id)
        .then(() => {
            alert("Autito actualizado con éxito!");
            window.location.href = "../screens/productos.html";
        })
        .catch(error => {
            alert("Error al actualizar autito: " + error);
        });
});