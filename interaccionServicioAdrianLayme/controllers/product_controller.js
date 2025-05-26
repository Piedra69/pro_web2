import { productService } from "../service/product-service.js";

const crearProductoCard = (nombre, precio, descripcion, id) => {
  const card = document.createElement('div');
  card.classList.add('producto-card');
  card.dataset.id = id;
  
  const contenido = `
    <div class="producto-card__info">
      <h3 class="producto-card__nombre">NOMBRE: ${nombre}</h3>
      <p class="producto-card__descripcion">DESCRIPCION: ${descripcion}</p>
      <div class="producto-card__detalles">
        <span class="producto-card__precio">PRECIO: ${precio.toFixed(2)} $</span>
      </div>
      <div class="producto-card__acciones">
        <a href="../screens/editar_producto.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
        <button class="simple-button simple-button--delete" type="button" data-id="${id}">Eliminar</button>
      </div>
    </div>
  `;
  
  card.innerHTML = contenido;
  
  const btnEliminar = card.querySelector('button');
  btnEliminar.addEventListener('click', () => {
    const id = btnEliminar.dataset.id;
    productService.eliminarProducto(id)
      .then(() => {
        card.remove();
        alert("Producto eliminado correctamente");
      })
      .catch(err => alert("Error al eliminar producto"));
  });

  return card;
};


const productosDiv = document.querySelector("[data-productos]");

productService.listaProductos()
  .then((data) => {
    data.forEach(({nombre, precio, descripcion, id}) => {
      const nuevaCard = crearProductoCard(nombre, precio, descripcion, id);
      productosDiv.insertBefore(nuevaCard, productosDiv.lastElementChild);
    });
  })
  .catch((error) => alert("Ocurrió un error al cargar los productos"));