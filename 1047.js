var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
let hi = Number(lines.shift());
let mi = Number(lines.shift());
let hf = Number(lines.shift());
let mf = Number(lines.shift());
let ht = hf - hi;
let mt = mf - mi;
if(mt < 0){
    ht--;
    mt += 60;
}
if(ht < 0){
    ht += 24;
}
if(ht === 0 && mt === 0){
    ht += 24;
}
console.log(`O JOGO DUROU ${ht} HORA(S) E ${mt} MINUTO(S)`);