let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(Number);
let N = lines.shift();
let ine = 0;
let out = 0;
for (let i = 0; i < N; i++) {
  let x = lines.shift();
  if (x >= 10 && x <= 20){
    ine++;
  }else{ 
    out++;
  }
}
console.log(`${ine} in`);
console.log(`${out} out`);