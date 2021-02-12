/*Typecasting X type coersion*/

//console.log('9' + 5); //type coersion

//console.log(Number('9') + 5); //typecasting

/*Manipulando String e Numeros*/ 
//Transformando string em numero e numero em string
//let string = '123';
//console.log(string);

//let number = 321;
//console.log(String(number));

//Contagem de caracteres em palavras e dígitos em números;
//let word = 'paralelepípedo';
//console.log(word.length);
//let number = 1234
//console.log(String(number).length);

/*Fixar número de casas decimais de um número e trocar o ponto por vírgula*/
//let number = 33.33333333333;
//console.log(number.toFixed(2).replace('.', ','));

/*Verificando se um texto contém uma palavra */
//let frase='eu quero viver!'
//console.log(frase.includes('amor'));

/*Manipualndo Arrays*/
let techs = ['html', 'css', 'js'];

//adicionar um item ao fim
techs.push('node.js');
//adicionar um item ao começo
techs.unshift('sql');
//remover do fim
techs.pop();
//remover do começo
techs.shift();
//pegar somente alguns dos elementos do array
//console.log(techs.slice(1,3));
//remover 1 ou mais itens em qualquer posição
//techs.splice(1,2);
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index);