class remeraDeFutbol {
  constructor(nombre, id, precio, img) {
    this.nombre = nombre;
    this.id = id;
    this.precio = parseFloat(precio)
    this.img = img
  }
}
const indumentaria = [];
indumentaria.push(new remeraDeFutbol("Remera Arsenal 2022/2023", "PROD-1001", 60000, "https://i.pinimg.com/564x/58/e6/e9/58e6e923e80016daa8936fd3f00b4837.jpg"));
indumentaria.push(new remeraDeFutbol("Remera River Plate 2019/2020", "PROD-1002", 60000, "./img/river-plate-camiseta-2020-edition-front-1__12777.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Liverpool 2016/2017", "PROD-1003", 75000, "https://i.pinimg.com/564x/4a/f0/78/4af0782e8e3b8dff63b461ff8a05b4f0.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Ajax 2022/2023", "PROD-1004", 50000, "./img/ajax 2022.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Barcelona 2009", "PROD-2001", 80000, "./img/barcelona 2009.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Arsenal 2005/2006", "PROD-2002", 80000, "https://i.pinimg.com/564x/77/1b/77/771b77bb32caab8ee0c3c10e7989a675.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Real Madrid 1996/1997", "PROD-2003", 100000, "./img/real 96-97.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Manchester United 2000/2001", "PROD-2004", 80000, "./img/united 2000 2001.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Seleccion Argentina 2022", "PROD-3001", 60000, "./img/ARG2022_A.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Seleccion Marruecos 2022", "PROD-3002", 60000, "./img/Marruecos 2022.jpg"));
indumentaria.push(new remeraDeFutbol("Remera Seleccion Uruguaya Retro", "PROD-3003", 70000, "./img/uruguay retro.webp"));
indumentaria.push(new remeraDeFutbol("Remera Brasil 2022", "PROD-3004", 35000, "https://i.pinimg.com/564x/2b/de/32/2bde32baf5c0448d90f1fd2b0102cfed.jpg"));
indumentaria.push(new remeraDeFutbol("Short de Argentina", "PROD-4001", 30000, "./img/short argentina.jpg"));
indumentaria.push(new remeraDeFutbol("Short de Lanus", "PROD-4002", 30000, "./img/short lanus.jpg"));
indumentaria.push(new remeraDeFutbol("Short de River", "PROD-4003", 30000, "./img/short river.jpg"));
indumentaria.push(new remeraDeFutbol("Short de Voka", "PROD-4004", 30000, "./img/short voka.webp"));


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
    <button class="btn" id="PROD-1001" type="submit">Agregar al carrito</button>
    </div>
    `
    contenedorTarjetas.appendChild(nuevaIndumentaria);
    nuevaIndumentaria.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(indumentaria);

function agregarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("indumentaria"));
  console.log(memoria);
  let cuenta = 0;
  if (!memoria) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("indumentaria", JSON.stringify([nuevoProducto]));
    cuenta = 1;
  } else {
    const indiceProducto = memoria.findIndex(indumentaria => indumentaria.id === producto.id);
    console.log(indiceProducto);
    const nuevaMemoria = memoria
    if (indiceProducto === -1) {
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
      cuenta = 1;
    } else {
      nuevaMemoria[indiceProducto].cantidad++;
      cuenta = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("indumentaria", JSON.stringify(nuevaMemoria));
    
  }
  actualizarNumeroCarrito();
  return cuenta;
}

function restarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("indumentaria"));
  const indiceProducto = memoria.findIndex(indumentaria => indumentaria.id === producto.id);
  if (memoria[indiceProducto].cantidad === 1) {
    memoria.splice(indiceProducto,1);
    localStorage.setItem("indumentaria", JSON.stringify(memoria));
  } else{
    memoria[indiceProducto].cantidad--;

  }
  localStorage.setItem("indumentaria", JSON.stringify(memoria));
  actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}
const cuentaCarritoElement = document.getElementById("cuenta-carrito");

function actualizarNumeroCarrito() {
  const memoria = JSON.parse(localStorage.getItem("indumentaria"));
  if (memoria && memoria.length > 0) {
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuentaCarritoElement.innerText = cuenta;
  } else {
    cuentaCarritoElement.innerText = 0;
  }
}

actualizarNumeroCarrito();

const contenedorTarjetas2 = document.getElementById("contenedor-productos2");
const unidadesElemento = document.getElementById("unidades");
const precioElemento = document.getElementById("precio");
const reiniciarCarritoElemento = document.getElementById("reiniciar")

function crearTarjetasCompra() {
  contenedorTarjetas2.innerHTML ="";
  const productos = JSON.parse(localStorage.getItem("indumentaria"));
  console.log(productos);
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevaIndumentaria2 = document.createElement("div");
      nuevaIndumentaria2.classList = "producto-carrito";
      nuevaIndumentaria2.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}">
    <div>
        <h2>${producto.nombre}</h2>
        <em><p>$${producto.precio}</p></em>
    </div>
    <div class="cantidad-control">
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
    </div>
      `;
      contenedorTarjetas2.appendChild(nuevaIndumentaria2);
      nuevaIndumentaria2
          .getElementsByTagName("button")[1]
          .addEventListener("click", (e) => {
            const cuentaElementos = e.target.parentElement.getElementsByTagName("span")[0]
            cuentaElementos.innerText = agregarAlCarrito(producto);
            actualizarTotal();
    });
      nuevaIndumentaria2
          .getElementsByTagName("button")[0] 
          .addEventListener("click", () => {
            restarAlCarrito(producto);
            crearTarjetasCompra();
            actualizarTotal();
      });
    });
  }
}
crearTarjetasCompra();
actualizarTotal();

function actualizarTotal(){
  const productos = JSON.parse(localStorage.getItem("indumentaria"));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length>0) {
    productos.forEach(producto =>{
      unidades += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    })
    unidadesElemento.innerText = unidades;
    precioElemento.innerText = precio;
  }
}

reiniciarCarritoElemento.addEventListener("click", reiniciarCarrito)
function reiniciarCarrito() {
  localStorage.removeItem("indumentaria");
  actualizarTotal();
  crearTarjetasCompra();
}