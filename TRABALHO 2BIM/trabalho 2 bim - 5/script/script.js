let inputprecogasolina = document.querySelector("#inputprecogasolina");
let inputlitrosgasolina = document.querySelector("#inputlitrosgasolina");
let btexibir = document.querySelector("#btexibir");
let h3resultado = document.querySelector("#h3resultado");

function exibirpreco(){
let valorpago = Number(inputprecogasolina.value);
let valorgasolina = Number(inputlitrosgasolina.value);

h3resultado.innerHTML = "Os litros abastecidos de gasolina &eacute;: "+ (valorpago/valorgasolina) + "LITROS";
}

btexibir.onclick = function(){
    exibirpreco();
}