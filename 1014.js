let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [distancia, combustivel] = input.split("\n");
let consumo = distancia / combustivel;
console.log(consumo.toFixed(3) + " km/l");