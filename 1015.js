let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");
let distancia = Math.sqrt(Math.pow( (x2 - x1), 2) + Math.pow((y2 - y1), 2));
console.log(distancia.toFixed(4));