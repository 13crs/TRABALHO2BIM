let inputpontox = document.querySelector("#inputpontox");
let inpupontoy = document.querySelector("#inpupontoy");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorx = Number(inputpontox.value);
    let valory = Number(inpupontoy.value);

    h3resultado.innerHTML = 
    "A distancia dentre os pontos x e y &eacute;: " + Math.hypot(valorx,valory);

}

btcalcular.onclick = function(){
    calcular();
}