var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n').map(Number);
const n = lines.shift();
let x;
for(let i = 0; i < n; i++){
  x = lines.shift();
  if(x === 0 ){
    console.log("NULL");
  }else if(x%2 === 0 && x > 0){
    console.log("EVEN POSITIVE");
  }else if(x%2 === 0 && x < 0){
    console.log("EVEN NEGATIVE");
  }else if(x%2 !== 0 && x > 0){
    console.log("ODD POSITIVE");
  }else if(x%2 !== 0 && x < 0){
    console.log("ODD NEGATIVE");
  }
}