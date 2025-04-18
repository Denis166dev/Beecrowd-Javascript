var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let salario = parseFloat(input);
let reajuste = 0;
let novosalario = 0;
if(salario >= 0 && salario <= 400.00){
  reajuste = (salario * (15/100));
  novosalario = salario + reajuste;
  console.log(`Novo salario: ${novosalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 15 %`);
}
if(salario >= 400.01 && salario <= 800.00){
  reajuste = (salario * (12/100));
  novosalario = salario + reajuste;
  console.log(`Novo salario: ${novosalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 12 %`);
}
if(salario >= 800.01 && salario <= 1200.00){
  reajuste = (salario * (10/100));
  novosalario = salario + reajuste;
  console.log(`Novo salario: ${novosalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 10 %`);
}
if(salario >= 1200.01 && salario <= 2000.00){
  reajuste = (salario * (7/100));
  novosalario = salario + reajuste;
  console.log(`Novo salario: ${novosalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 7 %`);
}
if(salario > 2000.00){
  reajuste = (salario * (4/100));
  novosalario = salario + reajuste;
  console.log(`Novo salario: ${novosalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 4 %`);
}