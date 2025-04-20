var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let qtposi = 0;
let media = 0;
let x;
for(let i = 0; i < 6; i ++) {
  x = Number(lines.shift());
   if(x > 0){
   qtposi++;
   media += x;
  }
}
media = media/qtposi;
console.log(qtposi +" valores positivos");
console.log(media.toFixed(1));