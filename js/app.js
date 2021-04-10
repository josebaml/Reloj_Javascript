// Variables
let idTiempo;
let bandera = false;

// Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', () => {

        mostrarFecha();

        mostrarHora();

    });
    
}

// Funciones
function mostrarFecha(){
    let hoy = new Date();

    let dia = hoy.getDate();
    dia = dia < 10 ? `0${dia}` : dia;
    let mes = hoy.getMonth() + 1; 
    mes = mes < 10 ? `0${mes}` : mes;
    let anyo = hoy.getFullYear();

    let resultadoFecha = `${dia} / ${mes} / ${anyo}`;

    document.querySelector('#fecha').value = resultadoFecha;
}

function mostrarHora(){
    let hoy = new Date();

    let hora = hoy.getHours() < 10 ? `0${hoy.getHours()}` : hoy.getHours();
    let minutos = hoy.getMinutes() < 10 ? `0${hoy.getMinutes()}` : hoy.getMinutes();
    let segundos = hoy.getSeconds() < 10 ? `0${hoy.getSeconds()}` : hoy.getSeconds();

    let resultadoHora = `${hora} : ${minutos} : ${segundos}`;

    document.querySelector('#hora').value = resultadoHora;

    setTimeout("mostrarHora()", 1000);

}