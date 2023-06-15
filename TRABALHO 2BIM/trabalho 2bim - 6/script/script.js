let inputkgdoprato = document.querySelector("#inputkgdoprato");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorporkg = (inputkgdoprato.value);

    h3resultado.innerHTML = 
    "o valor a pagar &eacute;: R$ "+ (valorporkg*12);
}

btcalcular.onclick = function(){
    calcular()
}