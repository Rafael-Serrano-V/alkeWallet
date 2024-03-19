

function realizarDeposito() {

  //Obtiene el saldo actual y el monto a depositar
  let saldo = document.getElementById("saldo").innerText.split("$")[1];
  console.log(saldo);
  let montoADepositar = document.getElementById("montoADepositar").value;

  if (montoADepositar === "" || montoADepositar < 1000) {
    alert("El monto a depositar debe ser superior a $1000");

  } else {
    //Actualiza el saldo
    saldo = parseFloat(saldo) + parseFloat(montoADepositar);
   
    //Muestra el nuevo saldo
    document.getElementById("saldo").innerText = "$" + saldo;
    localStorage.setItem('saldo', saldo);
    document.getElementById("montoADepositar").value = "";
  }
}

if(localStorage.getItem('saldo')===null){
  document.getElementById("saldo").innerText = "$0";
}else{
  document.getElementById("saldo").innerText = "$" + localStorage.getItem("saldo");
}


