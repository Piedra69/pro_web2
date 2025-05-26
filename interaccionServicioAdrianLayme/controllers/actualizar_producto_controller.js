import { productService } from "../service/product-service.js";

const obtenerInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  if(!id) {
    window.location.href = "../screens/error.html";
    return;
  }

  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");

  try {
    const producto = await productService.producto(id);
    
    if(producto) {
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch(error) {
    console.error("Error al cargar producto:", error);
    window.location.href = "../screens/error.html";
  }
};

obtenerInfo();

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  
  const nombre = document.querySelector("[data-nombre]").value.trim();
  const precio = document.querySelector("[data-precio]").value.trim();
  const descripcion = document.querySelector("[data-descripcion]").value.trim();
  
  if(!nombre || !precio || !descripcion) {
    alert("Por favor complete todos los campos");
    return;
  }

  try {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    await productService.actualizarProducto(nombre, precio, descripcion, id);
    window.location.href = "../screens/edicion_concluida_producto.html";
  } catch(error) {
    console.error("Error al actualizar producto:", error);
    alert("Ocurrió un error al actualizar el producto");
  }
});