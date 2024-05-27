// let edad = prompt("Cuantos años tenes?")
// if (edad > 18){
//     alert("tienes la edad suficiente, puedes ingresar")
// } else{
//     alert("No tienes la edad para ingresar, vuelve cuando seas mayor de 18")
// }



// let año = prompt("En que año naciste?")
// let edad = 2024 - año
// alert("Como naciste en el año " + año + " tu edad es de " + edad)



// const edad = prompt('Ingrese tu edad actual: ');

// if (edad < 13) {
//   alert("Tu edad es "+edad+", eres un niño");
// } else if (edad >= 13 && edad < 18) {
//     alert("Tu edad es "+edad+", eres un adolescente");
// } else if (edad >= 18 && edad < 22) {
//     alert("Tu edad es "+edad+", estas entrando en la adultes");
// } else if (edad >= 23 && edad < 50) {
//     alert("Tu edad es "+edad+", ya eres un adulto");
// } else if (edad > 51) {
//     alert("Tu edad es "+edad+", estas entrando en la vejes");
// } else if (edad > 70) {
//     alert("Tu edad es "+edad+", eres un anciano70");
// }

// const cantidad = prompt('Ingrese la cantidad');
// for (let i=0;i <= cantidad;i++) {
//    console.log(i * 1);
//  }

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
cuotas = total / cuotas

