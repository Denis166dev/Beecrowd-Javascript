let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let nome1 = lines.shift();
let nome2 = Number(lines.shift());
let nome3 = Number(lines.shift());
let comissao = nome3 * 0.15;
let salariofinal = nome2 + comissao;
console.log("TOTAL = R$ " + salariofinal.toFixed(2));