let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split(' ');
let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let delta = (B**2)-(4*A*C);
if(delta > 0 && A !== 0) {
    let r1 = (-B + Math.sqrt(delta)) / (2*A);
    console.log("R1 = " + r1.toFixed(5));
    let r2 = (-B - Math.sqrt(delta)) / (2*A);
    console.log("R2 = " + r2.toFixed(5));
}else{
    console.log("Impossivel calcular");
}