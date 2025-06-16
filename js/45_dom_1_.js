// document.getElementById
// var
// let
// const

function muestraH1() { 

var h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.textContent);
h1.textContent = 'Hola Mundo';
console.log(h1);
console.log(h1.textContent);

}

function tagName_() {
    var todos_h1 = document.getElementsByTagName('h1');
    console.log(todos_h1);

    for(var i = 0; i< todos_h1.length; i++){
        console.log(todos_h1[i].textContent);
    }   
}

function verPorID() {
    var primero = document.getElementById('primero');
    primero.textContent = 'este título ha sido modificado';
    
}

function verPorClase() {
    var primero = document.getElementsByClassName('titulo');
    for(var elem of primero){
        console.log('por clase: ' + elem.textContent);
    }
    
}

function verConQuery() {
    var uno = document.querySelector('#primero');
    // cuando se utiliza el querySelector se coge el selector con # de las hojas de estilo
    var dos = document.querySelector('.titulo');
    dos.className = 'rojo'
    console.log('Por Query: ' + uno.textContent);
    console.log('Por Query: ' + dos.textContent);
    
}

function cambiaClase() {
    var elemento = document.getElementById('primero');
    if(elemento.className == 'rojo'){
        elemento.className = 'titulo'
    }
    else{
        elemento.className = 'rojo'
    }  
}

function verSeleccion(){
    var radios = document.getElementsByName('opciones');
    var selecc = document.getElementById('seleccion');
    for(var opc of radios){
        console.log('Valor: ' + opc.value + "Selecc: " + opc.checked);
        if(opc.checked){
            selecc.textContent = "Has seleccionado " + opc.value;
            break;
        }
    }   
}

function cambiaColor(actual) {
    var grp = document.getElementById('grupo');
    switch (actual) {
        case 1:
            grp.style.backgroundColor = 'red';
            break;
        case 2:
            grp.style.backgroundColor = 'yellow';
            break;
        case 3:
            grp.style.backgroundColor = 'green';
            break;
        case 4:
            grp.style.backgroundColor = 'cyan';
            break;
        case 5:
            grp.style.backgroundColor = 'blue';
            break;
    
        default:
            break;
    }
}
