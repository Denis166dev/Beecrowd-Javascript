let input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [A, B, C] = input.split(' ').map(value => parseFloat(value)).sort((a, b) => b - a);

if (A >= B + C) {
  console.log('NAO FORMA TRIANGULO');
} else {
  if (A ** 2 === B ** 2 + C ** 2) {
    console.log('TRIANGULO RETANGULO');
  }
  if (A ** 2 > B ** 2 + C ** 2) {
    console.log('TRIANGULO OBTUSANGULO');
  }
  if (A ** 2 < B ** 2 + C ** 2) {
    console.log('TRIANGULO ACUTANGULO');
  }
  if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
  }
  if ((A === B && B !== C) || (A === C && C !== B) || (B === C && C !== A)) {
    console.log('TRIANGULO ISOSCELES');
  }
}