import { autitoService } from "./autito-service.js";

// Función para crear una card de autito
const crearCardAutito = (nombre, precio, caja, gestion, color, id) => {
  const card = document.createElement("div");
  card.className = "productos__card";
  card.innerHTML = `
    <div class="productos__card-content">
      <h3 class="productos__card-nombre">${nombre}</h3>
      <p class="productos__card-precio">${precio.toFixed(2)} Bs</p>
      <div class="productos__card-details">
        <span class="productos__card-caja">Caja: ${caja}</span>
        <span class="productos__card-gestion">${gestion}</span>
        <span class="productos__card-color">${color}</span>
      </div>
      <div class="productos__card-actions">
        <a href="../screens/editar_productos.html?id=${id}" class="productos__card-btn productos__card-btn--editar">
          <i class="fas fa-edit"></i> Editar
        </a>
        <button class="productos__card-btn productos__card-btn--eliminar" data-id="${id}">
          <i class="fas fa-trash-alt"></i> Eliminar
        </button>
      </div>
    </div>
  `;

  // Agregar evento para eliminar
  const btnEliminar = card.querySelector("[data-id]");
  btnEliminar.addEventListener("click", async () => {
    try {
      await autitoService.eliminarAutito(id);
      card.remove();
      alert("Autito eliminado con éxito!");
      verificarListaVacia();
    } catch (error) {
      alert("Error al eliminar autito: " + error);
    }
  });

  return card;
};

// Verificar si la lista está vacía
const verificarListaVacia = () => {
  const contenedor = document.querySelector("[data-products-container]");
  const mensajeVacio = document.querySelector("[data-mensaje-vacio]");
  
  if (contenedor.children.length === 1) { // Solo queda el mensaje
    mensajeVacio.style.display = "flex";
  } else {
    mensajeVacio.style.display = "none";
  }
};

// Cargar y mostrar todos los autitos
const cargarAutitos = async () => {
  try {
    const listaAutitos = await autitoService.listaAutitos();
    const contenedor = document.querySelector("[data-products-container]");
    const mensajeVacio = document.querySelector("[data-mensaje-vacio]");

    if (listaAutitos.length === 0) {
      mensajeVacio.style.display = "flex";
      return;
    }

    mensajeVacio.style.display = "none";
    
    listaAutitos.forEach((autito) => {
      const card = crearCardAutito(
        autito.nombre,
        autito.precio,
        autito.caja,
        autito.gestion,
        autito.color,
        autito.id
      );
      contenedor.appendChild(card);
    });
  } catch (error) {
    alert("Error al cargar autitos: " + error);
  }
};

cargarAutitos();