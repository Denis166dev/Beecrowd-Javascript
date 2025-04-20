var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let par;
let qtposi = 0;
for(let i = 1; i <= 5; i ++) {
  par = lines.shift();
   if(par % 2 === 0){
   qtposi++;
  }
}
console.log(qtposi +" valores pares");