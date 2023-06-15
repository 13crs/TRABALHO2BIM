let inputcamisap = document.querySelector("#inputcamisap");
let inputcamisam = document.querySelector("#inputcamisam");
let inputcamisag = document.querySelector("#inputcamisag");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorp = Number(inputcamisap.value);
    let valorm = Number(inputcamisam.value);
    let valorg = Number(inputcamisag.value);

    h3resultado.innerHTML = 
    "O valor arrecadado &eacute;: R$ "+ (valorp*10 + valorm*12 + valorg*15);

}

btcalcular.onclick = function(){
    calcular();
}