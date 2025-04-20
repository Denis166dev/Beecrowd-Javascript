let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let salario = parseFloat(input);
let imposto = 0;
if(salario >= 0 && salario <= 2000){
  console.log("Isento");
}
if(salario > 2000 && salario <= 3000.00){
  imposto = (salario - 2000) * (8/100);
  console.log(`R$ ${imposto.toFixed(2)}`);
}
if(salario > 3000 && salario <= 4500.00){
  imposto = (salario - 3000) * (18/100) + 80;
  console.log(`R$ ${imposto.toFixed(2)}`);
}
if(salario > 4500){
  imposto = (salario - 4500) * (28/100) + 350;
  console.log(`R$ ${imposto.toFixed(2)}`);
}