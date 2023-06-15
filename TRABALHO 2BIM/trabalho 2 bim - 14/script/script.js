let inputcontadobar = document.querySelector("#inputcontadobar");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorCarlos = Number(inputcontadobar.value);
    let valorAndre = Number(inputcontadobar.value);
    let valorFelipe = Number(inputcontadobar.value);

    h3resultado.innerHTML = 
    "Carlos deve pagar: "+ (Math.trunc (valorCarlos/3)) +"<br>"+
    "Andre deve pagar: "+ (Math.trunc (valorAndre/3)) +"<br>"+
    "Felipe deve pagar: "+ (valorFelipe/3);
}

btcalcular.onclick = function(){
    calcular();
}
