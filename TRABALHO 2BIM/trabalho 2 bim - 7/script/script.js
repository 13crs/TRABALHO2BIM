let inputdia = document.querySelector("#inputdia");
let inputmes = document.querySelector("#inputmes");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let dia = Number(inputdia.value);
    let mes = Number(inputmes.value);

    h3resultado.innerHTML =
    "Se passaram "+ (mes * 30- (30-dia)) + " dias"
}

btcalcular.onclick = function(){
    calcular();
}