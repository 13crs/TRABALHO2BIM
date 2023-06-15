let inputnmrinteiro = document.querySelector("#inputnmrinteiro");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorcentena = Number(inputnmrinteiro.value);
    let valordezena = Number(inputnmrinteiro.value);
    let valorunidade = Number(inputnmrinteiro.value);
 

    h3resultado.innerHTML = 
    "Seu numero convertido para centena: "+ (valorcentena/100)+" centenas"+"<br>"+
    "Seu numero convertido para dezena: "+ (valordezena/10)+" dezenas"+"<br>"+
    "Seu numero convertido para unidade: "+  (valorunidade/1)+" unidades";
}

btcalcular.onclick = function(){
    calcular();
}