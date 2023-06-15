let inputcavalos = document.querySelector("#inputcavalos");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let numeroferraduras = Number(inputcavalos.value);

    h3resultado.innerHTML = 
    "Sao necessarias "+(numeroferraduras*4)+" ferraduras.";
}

btcalcular.onclick = function(){
    calcular();
}
