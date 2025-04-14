let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let qtd = parseInt(input);
let valores = [3600, 60, 1]; 
let resultado = [];
for (let valor of valores) {
    resultado.push( parseInt(qtd / valor));
    qtd = qtd % valor;
}
console.log(resultado.join(":"));