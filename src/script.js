var nome = prompt("Como você se chama?");
var dolar = prompt("Qual valor em dolar você quer converter em real? ");

//cotacao do dolar em 13/11/23
var cotacaoDoDolar = 5.32;

var valorEmReal = dolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert("Oi " + nome + ", U$ " + dolar + " equivale a R$ " + valorEmReal);
