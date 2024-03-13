
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");

//Función para validar el ingreso de usuario
function login(e) {
  e.preventDefault();
  const logeado = email.value === 'usuario@email.cl' && contrasenia.value === "12345";
  if (logeado) { 
    sessionStorage.setItem("autenticado", true);
    location.href = "../html/menu.html"
  }else{
    alert("Usuario y/o contraseña incorrectos");
  }
}

form.addEventListener("submit", login);
