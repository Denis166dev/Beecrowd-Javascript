var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ').map(Number);
let a = lines.shift();
let b = lines.shift();
let c = lines.shift();
let area;
let perimetro;

if ((b - c) < a && a < (b + c) && (a - c) < b && b < (a + c) && (a - b) < c && c < (a + b)){
    perimetro = a + b + c;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}else{
    area = ((a + b)*c)/2.0;
    console.log(`Area = ${area.toFixed(1)}`);
}