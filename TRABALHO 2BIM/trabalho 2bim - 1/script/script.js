let inputcomp = document.querySelector("#inputcomp");
let inputlargura = document.querySelector("#inputlargura");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorcomp = Number(inputcomp.value);
    let valorlargura = Number(inputlargura.value);

    h3resultado.innerHTML = 
    "A area do terreno &eacute; de: "+(valorcomp*valorlargura)+" metros quadrados."
}

btcalcular.onclick = function(){
    calcular();
}