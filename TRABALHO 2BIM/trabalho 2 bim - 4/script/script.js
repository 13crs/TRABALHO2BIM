let inputnome = document.querySelector("#inputnome");
let inputidade = document.querySelector("#inputidade");
let btexibir = document.querySelector("#btexibir");
let h3resultado = document.querySelector("#h3resultado");

function exibir(){
    let nome = String(inputnome.value);
    let idade = Number(inputidade.value);

    h3resultado.innerHTML = 
    "Seu nome &eacute;:" +(nome)+"<br>"+
    "Sua idade em dias &eacute;:"+ (idade*365)+"<br>";
}

btexibir.onclick = function(){
    exibir();
}