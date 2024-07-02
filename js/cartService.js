function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("indumentaria"));
    console.log(memoria);
    if (!memoria) {
      const nuevoProducto = getNuevoProductoParaMemoria(producto);
      localStorage.setItem("indumentaria",JSON.stringify([nuevoProducto]));
    }else{
      const indiceProducto = memoria.findIndex(indumentaria => indumentaria.id === producto.id);
      console.log(indiceProducto);
      const nuevaMemoria = memoria
      if (indiceProducto === -1) {
        nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
      }else{
        nuevaMemoria[indiceProducto].cantidad ++;
      }
      localStorage.setItem("indumentaria",JSON.stringify(nuevaMemoria));
    }
  }
  
  function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
  }
  const cuentaCarritoElement = document.getElementById("cuenta-carrito");
  function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("indumentaria"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0)
    cuentaCarritoElement.innerText = cuenta;
  }
  actualizarNumeroCarrito()