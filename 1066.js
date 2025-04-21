var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let numpar = 0;
let numimpar = 0;
let numposi =0;
let numnega =0;
let x;
for(let i = 0; i < 5; i ++){
  x = Number(lines.shift());
  if(x % 2 === 0){
    numpar++;
  }else numimpar++
  if(x > 0){
    numposi++;
  }else if(x < 0){
    numnega++;
  }
}
console.log(numpar +" valor(es) par(es)");
console.log(numimpar +" valor(es) impar(es)");
console.log(numposi +" valor(es) positivo(s)");
console.log(numnega +" valor(es) negativo(s)");