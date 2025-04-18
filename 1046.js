var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
let hi = Number(lines.shift());
let hf = Number(lines.shift());
if(hf <= hi){
    hf += 24;
}
let  duracao = hf - hi;
console.log("O JOGO DUROU "+ duracao + " HORA(S)");