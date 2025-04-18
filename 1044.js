let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ').map(Number);
let a = lines.shift();
let b = lines.shift();

if(a%b === 0 || b%a === 0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}