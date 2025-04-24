var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let N = Number(input);

for(let i = 1; i < 10000; i++){
    if(i % N == 2){
        console.log(i);
    }
}