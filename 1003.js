let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let soma = A + B;
console.log("SOMA = " + soma);