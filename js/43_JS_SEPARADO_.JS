function saludo() {
    document.write('<br> Esto es una prueba de enlace con el java script');
    
}
function cuentaVocales(texto){
    
    var vocales = 'aeiouAEIOU';
    var contador = 0;
        
        for(var letra of texto){
            if(vocales.indexOf(letra) >=0){
                contador++;
            }
        }
        return contador;   
}

// Función que reciba una array de números y devuelva el mayor.

function maximo(entrada) {
    // [23,4,55,6,7,8,90,12].sort(function(a,b) {return b-a})
    entrada.sort(function(a,b) {return b-a});
    alert(entrada[0]);
}