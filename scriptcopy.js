let comprar = 0
while (comprar != 2){
    comprar = parseInt(prompt("Ingrese una opcion: \n 1. Quiero comprar una prenda \n 2. Salir"))
    if (comprar == 1){
        let cantidadRemeras = parseInt(prompt("Cuantas remeras queres llevarte?"))
        let total = 0
        function pedirRemera(){
            let remera = parseInt(prompt("Marca de a 1 el valor de cada una de las remeras y preciona Enter para poner el siguiente en caso de haber eleguido mas de 1"))
            return remera;
    
    
        }
        for (let i = 1; i <= cantidadRemeras; i++) {
            let remera = pedirRemera();
            if (remera == 0) {
                alert("Por favor, elegí un monto válido que coincida con tu prenda.");
                i= i - 1;
                continue;
        
            } else {
            total += remera;
            }
        }

        alert("Gracias por eleguirnos el monto total por todas las remeras es de $"+total);
        let cuotas = prompt("En cuantas cuotas te gustaria pagar el monto?")
        let valorCuotas = total / cuotas
        alert("El valor final en " + cuotas + " cuotas es de " + valorCuotas + "$ abona el efectivo al siguiente Alias:CoderComicion#71340. Muchas gracias.")
    } else if (comprar == 2){
        alert("Gracias por pasarte por aqui, vuelva pronto") 
    } else{
        alert("El valor ingresado no coincide con ninguna de las opciones dadas")
    }

}

