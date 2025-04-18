var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let linha = lines.shift();
let notas = linha.split(" ");
let n1 = parseFloat(notas.shift());
let n2 = parseFloat(notas.shift());
let n3 = parseFloat(notas.shift());
let n4 = parseFloat(notas.shift());
let media = (2*n1 + 3*n2 + 4*n3 + 1*n4) /10;
console.log("Media: " + media.toFixed(1));
if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if(media < 5.0){
    console.log("Aluno reprovado.");
}else{
    console.log("Aluno em exame.");
    let nota = parseFloat(lines.shift());
    console.log("Nota do exame: " + nota.toFixed(1));
    let media1 = (nota + media) /2;
if(media1 >= 5.0){
    console.log("Aluno aprovado.");
    console.log("Media final: " + media1.toFixed(1));
}else{
    console.log("Aluno reprovado.");
    console.log("Media final: " + media1.toFixed(1));
}
}