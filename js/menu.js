
$("#depositarDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de depositar dinero después de 2 segundos
    setTimeout(function(){
        window.location = "deposit.html"; }, 2000);
    
});

$("#transferirDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de transferir dinero después de 2 segundos
    setTimeout(function(){
        window.location = "sendmoney.html"; }, 2000);
    
});

$("#movimientosModal").on("shown.bs.modal", function (e){
    //Redirige a la página de movimientos después de 2 segundos
    setTimeout(function(){
        window.location = "transactions.html"; }, 2000);
    
});

//Actualiza el saldo disponible
document.getElementById("saldoDisponible").innerText = "$" + localStorage.getItem("saldo");