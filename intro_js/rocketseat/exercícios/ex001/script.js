//Exercícios de introdução
//1. Declare uma variável de nome weight
let weight;

//2.Que tipo de dado é a variável acima?
console.log(typeof weight); 

/*3. Declare uma varável e atribua valores para cada um dos dados:
- name: String
- age: Number (integer)
- stars: Number (float)
- isSubscribed: Boolean
*/
  
let name = "João";
let age = 20;
let stars = 4.5;
 let isSubscribed = true;

//4.Atribua ao objeto abaixo as mesmas propriedades e valores do exercicio 3
let student ={
    name: "João",
    age: 20,
    weight: 70.4,
    isSubscribed: true,
}

/*4.1 Mostre no console a seguinte mensagem:
<name> de idade <age> pesa <weight>*/
console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg.`)

//5. Declare uma variável de tipo Array, com o nome students e atribua a ela nenhum valor
let students = [];

//6. Reatribua valor para o array acima, colocando dentro dele o objeto student da questão 4
students=[
    student
];

//7. Coloque no console o valor da posição 0 do array
console.log(students[0]);

//8. Crie um novo student e coloque ele na posição 1 do array
const john ={
    name: "john",
    age: 22,
    weight: 75.7,
    isSubscribed: true,
}

students = [student, john];
//students[1] = john;