/*
    Function constructor

    expressão new
    criar um novo objeto
    this keyword
*/

function Person(name){
    this.name = name;
    this.walk = function () {
        return this.name + " está andando";
    } 
}

const breno = new Person('breno');
const joao = new Person('joao');
console.log(breno.walk());
console.log(joao.walk());