
var manejador;

function iniciar() {
    // let reloj = document.getElementById('reloj');

    // let fecha = new Date();
    // const hora = fecha.getHours();
    // let minutos = fecha.getMinutes();
    // let segundos = fecha.getSeconds();

    // reloj.textContent = `${hora}:${minutos}:${segundos}`;

    muestraHora();
    manejador = setInterval(muestraHora, 1000);
    
}

function muestraHora() {
    let reloj = document.getElementById('reloj');

    let fecha = new Date();
    const hora = String(fecha.getHours()).padStart(2,'0');
    let minutos = String(fecha.getMinutes()).padStart(2,'0');
    let segundos = fecha.getSeconds();

    segundos = segundos.toString().padStart(2,'0');

    reloj.textContent = `${hora}:${minutos}:${segundos}`;
    muestraMes();  
}

function muestraMes() {
    let dia_mes = document.getElementById("dia_mes");
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anno = fecha.getFullYear();

    dia_mes.textContent = `${dia} / ${mes} / ${anno}`
    
}

function parar() {
    clearInterval(manejador);
    
}

