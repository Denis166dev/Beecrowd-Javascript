let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let numero = Number(input);
let tabuada = new Array(10);

for(let i = 0; i < 10; i++){
  let valor = i;
  tabuada[i] = numero  * (valor + 1);
}
for(let i = 0; i < 10; i++){
  let valor = i;
  console.log(`${valor + 1} x ${numero} = ${tabuada[i]}`);
}