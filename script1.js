// script1.js


const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;
            const producto = Productos.find(p => p.id === id);
            carrito.push(producto);
            guardarCarrito();
            actualizarCarrito();
        });
    });
    actualizarCarrito();
});

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarCarrito() {
    const comprasSection = document.querySelector('#compras section');
    comprasSection.innerHTML = '';

    carrito.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');

        productElement.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="product-info">
                <h2>${producto.nombre}</h2>
                <p class="description">Id:${producto.id}</p>
                <p class="price">$${producto.precio}</p>
            </div>
        `;

        comprasSection.appendChild(productElement);
    });
}
