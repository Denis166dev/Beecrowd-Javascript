let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let D = Number(lines.shift());
let DIFERENCA = A * B - C * D;
console.log("DIFERENCA = " + DIFERENCA);