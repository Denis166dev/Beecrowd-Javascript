let input = require("fs").readFileSync("/dev/stdin", "utf8");

let valor = parseInt(input);

console.log(valor);

let notas = [100, 50, 20, 10, 5, 2, 1];

for(let nota of notas){
  let qtd = parseInt(valor / nota);
  console.log(`${qtd} nota(s) de R$ ${nota},00`);
  valor = valor%nota;
}