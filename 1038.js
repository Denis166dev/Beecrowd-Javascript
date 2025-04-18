var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let cd = lines.shift();
let qt = lines.shift();

 if (cd == 1){
    var valor1 = (qt * 4.00).toFixed(2);
 console.log("Total: R$ " + valor1);
}

else if (cd == 2){
    var valor2 = (qt * 4.50).toFixed(2);
 console.log("Total: R$ " + valor2);
}
else if (cd == 3){
    var valor3 = (qt * 5.00).toFixed(2);
 console.log("Total: R$ " + valor3);
}
else if (cd == 4){
    var valor4 = (qt * 2.00).toFixed(2);
 console.log("Total: R$ " + valor4);
}
else if (cd == 5){
    var valor5 = (qt * 1.50).toFixed(2);
 console.log("Total: R$ " + valor5);
}