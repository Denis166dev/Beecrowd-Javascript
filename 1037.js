let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let intervalo = Number(input);
if(intervalo > 25 && intervalo <= 50){
    console.log("Intervalo (25,50]");
}else if(intervalo >= 0 && intervalo <= 25){
    console.log("Intervalo [0,25]");
}else if(intervalo > 75 && intervalo <= 100){
    console.log("Intervalo (75,100]");
}else if(intervalo -25)
 console.log("Fora de intervalo");