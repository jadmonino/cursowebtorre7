// IMPRIMIR LOS NUMEROS DEL 1 AL 20

// for(var i = 1; i<=20; i+=1){
//     console.log(i);
// }

// ---------------------------------------------------

// var limite = 1;
// while (limite <= 20){
//     console.log('while: ' + limite);
//     limite += 1;   
// }

// operando; operador; operando ( x < 9 )

// ----------------------------------------------------

// IGUAL QUE EL ANTERIOR PERO EN UNA SOLA FILA

// var lista = [];
// for(var i = 1; i<=20; i+=1){
//     lista.push(i);
// }
// console.log(lista);

// -----------------------------------------------------

// var lista = [];
// for(var i = 1; i<=20; i+=1){
//     lista.push(i);
// }
// console.log(lista.toString());

// -----------------------------------------------------

var lista = [];
for(var i = 1; i<=20; i+=1){
    lista.push(i);
}
console.log(lista);
console.log(lista.toString());

var cadena = lista.toString();
// var x = cadena.split(',');
console.log(cadena.split(','));

// ---volver a convertir la cadena en un array de números-

var lista = [];
for(var i = 1; i<=20; i+=1){
    lista.push(i);
}
console.log(lista);
console.log(lista.toString());

var cadena = lista.toString();
var x = cadena.split(',');
console.log(cadena.split(','));

var numero = [];

for(var valor of x){
    numero.push(parseInt(valor));
}
console.log(numero);

// 

// 3.- Hacer una función que reciba un array de números 

// [12,2,3,4,55,6,7,17,66]