let inputsalario = document.querySelector("#inputsalario");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorinicial = Number(inputsalario.value);
    let valoraumentado = Number(inputsalario.value);
    let valorreduzido = Number(inputsalario.value);
 

    h3resultado.innerHTML = 
   "O salario inicial &eacute;: R$ "+ (valorinicial*1)+"<br>"+
   "Com o aumento de 15% seu salario &eacute;: R$"+ (valorinicial + (valoraumentado * 15/100)) +"<br>" +
   "Com a reducao de 8% seu salario &eacute;: R$" +(valorinicial - (valorreduzido * 8/100)) ;
}

btcalcular.onclick = function(){
    calcular();
}
