let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let N = Number(input);
let resultado = new Array(1);
let operacao = 0;
for(let i = 1; i <= N; i++){
  if(i % 2 === 0){
    operacao = i * i;
    resultado = [operacao];
    console.log(`${i}^2 = ${resultado}`);  
  }
}