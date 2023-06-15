let inputdias = document.querySelector("#inputdias");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valoranos = Number(inputdias.value);
    let valormeses = Number(inputdias.value);
    let valordias = Number(inputdias.value);

    h3resultado.innerHTML = 
    "A coversao para anos &eacute; de: "+ Math.trunc(valoranos/365)+ "<br>"+
    "A conversao para meses &eacute; de: "+ Math.trunc(valormeses/12)+ "<br>"+
    "O numero de dias &eacute;: "+(valordias*1);
}

btcalcular.onclick = function(){
    calcular();
}