var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let qtdias = parseInt(input);
let qtanos;
let qtmeses;

qtanos = parseInt(qtdias / 365);
qtdias = qtdias % 365;

qtmeses = parseInt(qtdias / 30);
qtdias = qtdias % 30;

let resultado = `${qtanos} ano(s)
${qtmeses} mes(es)
${qtdias} dia(s)`;

console.log(resultado);