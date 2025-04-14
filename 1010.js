let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let [iditem1, qtditem1, valoritem1] = lines.shift().split(" ");
let [iditem2, qtditem2, valoritem2] = lines.shift().split(" ");
let valor1 = qtditem1 * valoritem1;
let valor2 = qtditem2 * valoritem2;
let valortotal = valor1 + valor2;
console.log("VALOR A PAGAR: R$ " + valortotal.toFixed(2));