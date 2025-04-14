let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');
let A = Number(lines.shift());
let B = Number(lines.shift());
let media = (A * 3.5 + B * 7.5)/11.0;
console.log("MEDIA = " + media.toFixed(5));