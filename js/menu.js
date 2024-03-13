
$("#depositarDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de depositar dinero después de 3 segundos
    setTimeout(function(){
        window.location = "../html/deposit.html"; }, 2000);
    
});

$("#transferirDineroModal").on("shown.bs.modal", function (e){
    //Redirige a la página de depositar dinero después de 3 segundos
    setTimeout(function(){
        window.location = "../html/sendmoney.html"; }, 2000);
    
});

$("#movimientosModal").on("shown.bs.modal", function (e){
    //Redirige a la página de depositar dinero después de 3 segundos
    setTimeout(function(){
        window.location = "../html/transactions.html"; }, 2000);
    
});

document.getElementById("saldoDisponible").innerText = "$" + localStorage.getItem("saldo");