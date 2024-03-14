
$("#depositarDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de depositar dinero después de 2 segundos
    setTimeout(function(){
        window.location = "/html/deposit.html"; }, 2000);
    
});

$("#transferirDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de transferir dinero después de 2 segundos
    setTimeout(function(){
        window.location = "/html/sendmoney.html"; }, 2000);
    
});

$("#movimientosModal").on("shown.bs.modal", function (e){
    //Redirige a la página de movimientos después de 2 segundos
    setTimeout(function(){
        window.location = "/html/transactions.html"; }, 2000);
    
});

//Actualiza el saldo disponible
document.getElementById("saldoDisponible").innerText = "$" + localStorage.getItem("saldo");