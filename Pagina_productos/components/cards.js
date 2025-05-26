const cards = (() => {
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".modal-close");

    const productosData = {
        "Gafitas": {
            title: "Gafitas Chayanne",
            img: "img/gatitoGafas.jpg",
            description: "Protege tus ojos con estilo con nuestras gafas de sol premium."
        },
        "Vestidito": {
            title: "Vestido Chayanne",
            img: "img/gatitoVestido.jpg",
            description: "Luce increíble con este hermoso vestido para cualquier ocasión."
        }
    };

    const openModal = (product) => {
        if (productosData[product]) {
            modalTitle.textContent = productosData[product].title;
            modalImg.src = productosData[product].img;
            modalDescription.textContent = productosData[product].description;
            modal.style.display = "flex"; 
        }
    };

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.addEventListener("click", () => {
        document.querySelectorAll(".contenidoPrincipal-productos-link a").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const productitos = event.target.textContent.trim();
                openModal(productitos);
            });
        });
    });
})();

export default cards;