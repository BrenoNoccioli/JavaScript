function soma(n1, n2) {
    return n1+n2
}

console.log(soma(2))

/* Pode-se fazer parâmetros opcionais da seguinte forma:
function soma(n1=0, n2=0) {
    return n1+n2
}
console.log(soma(2))
- Dessa forma, caso um dos parâmetros não seja definido pelo usuário, ele receberá "0".
*/