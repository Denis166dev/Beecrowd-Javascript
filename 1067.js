var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let a;
a = Number(input);
for(i = 1; i <= a; i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}