var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let x;
let impar;
impar = 0;
x = Number(input);
while(impar < 6){
  if(x % 2 !== 0){
    console.log(x);
    impar++;
  }
  x++;
}