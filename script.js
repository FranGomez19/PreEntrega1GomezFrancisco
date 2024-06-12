class remeraDeFutbol{
    constructor(nombre, id, precio){
        this.nombre = nombre;
        this.id = id;
        this.precio = parseFloat(precio)
    }
}
const Productos = [];
Productos.push(new remeraDeFutbol("Remera Arsenal 2022/2023", "PROD-1001" , 60000))
Productos.push(new remeraDeFutbol("Remera River Plate 2019/2020", "PROD-1002" , 60000))
Productos.push(new remeraDeFutbol("Remera Liverpool 2016/2017", "PROD-1003" , 75000))
Productos.push(new remeraDeFutbol("Remera Ajax 2022/2023", "PROD-1004" , 50000))
Productos.push(new remeraDeFutbol("Remera Barcelona 2009", "PROD-2001" , 80000))
Productos.push(new remeraDeFutbol("Remera Arsenal 2005/2006", "PROD-2002" , 80000))
Productos.push(new remeraDeFutbol("Remera Real Madrid 1996/1997", "PROD-2003" , 100000))
Productos.push(new remeraDeFutbol("Remera Manchester United 2000/2001", "PROD-2004" , 80000))
Productos.push(new remeraDeFutbol("Remera Seleccion Argentina 2022", "PROD-3001" , 60000))
Productos.push(new remeraDeFutbol("Remera Seleccion Marruecos 2022", "PROD-3002" , 60000))
Productos.push(new remeraDeFutbol("RRemera Seleccion Uruguaya Retro", "PROD-3003" , 70000))
Productos.push(new remeraDeFutbol("Remera Brasil 2022", "PROD-3004" , 35000))
Productos.push(new remeraDeFutbol("Short de Argentina", "PROD-4001" , 30000))
Productos.push(new remeraDeFutbol("Short de Lanus", "PROD-4002" , 30000))
Productos.push(new remeraDeFutbol("Short de River", "PROD-4003" , 30000))
Productos.push(new remeraDeFutbol("Short de Voka", "PROD-4004" , 30000))


function pedirRemera() {
    let idRemera = prompt("Ingrese el ID del producto:");
    let precioRemera = 0;

    for (const producto of Productos) {
        if (producto.id === idRemera) {
            precioRemera = producto.precio;
            break; 
        }
    }
    return precioRemera;
}

function iniciarCompra() {
    let comprar = 0;
    while (comprar != 2) {
        comprar = parseFloat(prompt("Ingrese una opcion: \n 0. Mostrar catalogo \n 1. Quiero comprar una prenda \n 2. Salir"));
        if (comprar == 1) {
            let cantidadRemeras = parseFloat(prompt("Cuantas remeras queres llevarte?"));
            let total = 0;
            for (let i = 1; i <= cantidadRemeras; i++) {
                let precioRemera = pedirRemera();
                if (precioRemera == 0) {
                    alert("Por favor, elija un precio válido que coincida con su prenda.");
                    i= i - 1;
                    continue;
                } else {
                    total += precioRemera;
                }
            }

            alert("Gracias por elegirnos. El monto total por todas las remeras es de $" + total);
            let cuotas = parseFloat(prompt("¿En cuántas cuotas le gustaría pagar el monto?"));
            let valorCuotas = total / cuotas;
            alert("El valor final en " + cuotas + " cuotas es de $" + valorCuotas + ". Por favor, abone en efectivo al siguiente Alias: CoderComicion#71340. ¡Muchas gracias!");
        } else if (comprar == 2) {
            alert("¡Gracias por su visita! ¡Vuelva pronto!");
        } else if (comprar == 0) {
            for(const producto of Productos){
                let mensaje = "Nombre: " + producto.nombre + "\n" +
                            "ID: " + producto.id + "\n" +
                            "Precio: $" + producto.precio;
                alert(mensaje);
            }
        } else {
            alert("El valor ingresado no coincide con ninguna de las opciones dadas")
        }
    }
}

document.getElementById("comprar").addEventListener("click", iniciarCompra);