let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let PI = 3.14159;
let raio = parseFloat(input);
let area = PI * Math.pow(raio, 2);
console.log("A=" + area.toFixed(4));