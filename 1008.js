let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let funcionario = lines.shift();
let horastbr = lines.shift();
let valorhr = lines.shift();
let salario = horastbr * valorhr;
console.log("NUMBER = " + funcionario);
console.log("SALARY = U$ " + salario.toFixed(2));