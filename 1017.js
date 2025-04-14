let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [tempo, velocidade] = input.split('\n');
let total = tempo * velocidade;
let qtd = total / 12;
console.log(qtd.toFixed(3));