const contenedorTarjetas = document.getElementById("contenedor-productos");

function crearTarjetasProductosInicio(productos) {
  productos.forEach(producto => {
    const nuevaIndumentaria = document.createElement("div");
    nuevaIndumentaria.classList = "product-card"
    nuevaIndumentaria.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <div class="product-info">
    <h2>${producto.nombre}</h2>
    <p class="description">Id:${producto.id}.</p>
    <p class="price">$${producto.precio}</p>
    <button class="btn" id="PROD-1001">Agregar al carrito</button>
    </div>
    `
    contenedorTarjetas.appendChild(nuevaIndumentaria);
    nuevaIndumentaria.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
  }); 
}
crearTarjetasProductosInicio(indumentaria);