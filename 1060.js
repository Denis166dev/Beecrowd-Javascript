var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let qtposi = 0;
let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();
let valor5 = lines.shift();
let valor6 = lines.shift();
if(valor1 > 0){
    qtposi++;
}
if(valor2 > 0){
    qtposi++;
}
if(valor3 > 0){
    qtposi++;
}
if(valor4 > 0){
    qtposi++;
}
if(valor5 > 0){
    qtposi++;
}
if(valor6 > 0){
    qtposi++;
}
console.log(qtposi + " valores positivos");
