

/**
 * Guarda true si el usuario esta auntenticado, de lo contrario guarda null y me redirige a la pantalla login
 */

const logeado = sessionStorage.getItem("autenticado");

if(!logeado){
    location.href = 'login.html';
}