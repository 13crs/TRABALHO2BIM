let inputpaes = document.querySelector("#inputpaes");
let inputbroas = document.querySelector("#inputbroas");
let btcalcular = document.querySelector("#btcalcular");
let h3resultado = document.querySelector("#h3resultado");

function calcular(){
    let valorpaes = Number(inputpaes.value);
    let valorbroas = Number(inputbroas.value);
    let valoraguardar = Number(inputpaes+inputbroas.value);

    h3resultado.innerHTML = 
 "O valor total de paes &eacute;: "+(valorpaes*0.12)+"<br>"+
 "O valor total de broas &eacute;: "+(valorbroas*1.50)+"<br>"+
 "O valor com 10% a se depositar &eacute;:  "+(valoraguardar = valorpaes+valorbroas / 10/100);

}

btcalcular.onclick = function(){
    calcular();
}