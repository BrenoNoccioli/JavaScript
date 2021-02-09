//function expression ou function anonymous
const sum = function(x, y){ //parâmetros
    let total = x+y;
    return total;
}

let n1 = 25;
let n2 = 34;
sum(n1, n2) //invocando um função com argumentos

console.log(`O número 1 é ${n1}`);
console.log(`O número 1 é ${n2}`);
console.log(`e a soma é ${sum(n1, n2)}`);
