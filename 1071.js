let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n').map(Number);
let X = lines.shift();
let Y = lines.shift();
let soma = 0;
if (X < Y) {
	for (let i = X + 1; i < Y; i++) {
		if (i % 2 !== 0) {
			soma += i;
		}
	}
} else {
	for (let i= Y + 1; i < X; i++) {
		if (i % 2 !== 0) {
			soma += i;
		}
	}
}	
console.log(soma);