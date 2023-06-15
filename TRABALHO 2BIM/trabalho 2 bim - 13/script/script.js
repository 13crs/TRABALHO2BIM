let inputraiopizza = document.querySelector("#inputraiopizza");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let raiopizza = Number(inputraiopizza.value);

    h3resultado.innerHTML = 
    "A area da pizza &eacute; "+(3.14*(raiopizza^2));
}

btcalcular.onclick = function(){
    calcular();
}