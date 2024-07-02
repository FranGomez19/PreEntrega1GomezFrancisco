class RemeraDeFutbol {
    constructor(nombre, id, precio, img) {
        this.nombre = nombre;
        this.id = id;
        this.precio = parseFloat(precio);
        this.img = img;
    }
}

const Productos = [];
Productos.push(new RemeraDeFutbol("Remera Arsenal 2022/2023", "PROD-1001", 60000, "https://i.pinimg.com/564x/58/e6/e9/58e6e923e80016daa8936fd3f00b4837.jpg"));
Productos.push(new RemeraDeFutbol("Remera River Plate 2019/2020", "PROD-1002", 60000, "./img/river-plate-camiseta-2020-edition-front-1__12777.jpg"));
Productos.push(new RemeraDeFutbol("Remera Liverpool 2016/2017", "PROD-1003", 75000, "https://i.pinimg.com/564x/4a/f0/78/4af0782e8e3b8dff63b461ff8a05b4f0.jpg"));
Productos.push(new RemeraDeFutbol("Remera Ajax 2022/2023", "PROD-1004", 50000, "./img/ajax 2022.jpg"));
Productos.push(new RemeraDeFutbol("Remera Barcelona 2009", "PROD-2001", 80000, "./img/barcelona 2009.jpg"));
Productos.push(new RemeraDeFutbol("Remera Arsenal 2005/2006", "PROD-2002", 80000, "https://i.pinimg.com/564x/77/1b/77/771b77bb32caab8ee0c3c10e7989a675.jpg"));
Productos.push(new RemeraDeFutbol("Remera Real Madrid 1996/1997", "PROD-2003", 100000, "./img/real 96-97.jpg"));
Productos.push(new RemeraDeFutbol("Remera Manchester United 2000/2001", "PROD-2004", 80000, "./img/united 2000 2001.jpg"));
Productos.push(new RemeraDeFutbol("Remera Seleccion Argentina 2022", "PROD-3001", 60000, "./img/ARG2022_A.jpg"));
Productos.push(new RemeraDeFutbol("Remera Seleccion Marruecos 2022", "PROD-3002", 60000, "./img/Marruecos 2022.jpg"));
Productos.push(new RemeraDeFutbol("Remera Seleccion Uruguaya Retro", "PROD-3003", 70000, "./img/uruguay retro.webp"));
Productos.push(new RemeraDeFutbol("Remera Brasil 2022", "PROD-3004", 35000, "https://i.pinimg.com/564x/2b/de/32/2bde32baf5c0448d90f1fd2b0102cfed.jpg"));
Productos.push(new RemeraDeFutbol("Short de Argentina", "PROD-4001", 30000, "./img/short argentina.jpg"));
Productos.push(new RemeraDeFutbol("Short de Lanus", "PROD-4002", 30000, "./img/short lanus.jpg"));
Productos.push(new RemeraDeFutbol("Short de River", "PROD-4003", 30000, "./img/short river.jpg"));
Productos.push(new RemeraDeFutbol("Short de Voka", "PROD-4004", 30000, "./img/short voka.webp"));