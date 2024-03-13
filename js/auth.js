// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()

console.log('a');

/**
 * Guarda true si el usuario esta auntenticado, de lo contrario guarda null y me redirige a la pantalla login
 */

const logeado = sessionStorage.getItem("autenticado");

if(!logeado){
    location.href = 'login.html';
}