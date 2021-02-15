/*Desafios*/
/* Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A, B, C
    * de 90 para cima - A
    * entre 80 - 89 - B
    *  entre 70 - 79 - C
    *  entre 60 - 69 - D
    *  menor que 60 - f
*/

function transformaNota(nota){
    let notaA = nota >=90 && nota <=100;
    let notaB = nota >=80 && nota <=89;
    let notaC = nota >=70 && nota <=79;
    let notaD = nota >=60 && nota <=69;
    let notaE = nota <60 && nota >=0;

    let notaFinal;

    if(notaA){
        notaFinal = 'A';
    } else if(notaB){
        notaFinal = 'B';
    } else if(notaC){
        notaFinal = 'C';
    } else if(notaD){
        notaFinal = 'D';
    } else if(notaE){
        notaFinal = 'E'
    } else{
        notaFinal='Nota inválida'
    }

    return notaFinal;
}
 console.log(transformaNota(101));
 console.log(transformaNota(-1));
 console.log(transformaNota(0));
 console.log(transformaNota(1));
 console.log(transformaNota(45));
 console.log(transformaNota(60));
 console.log(transformaNota(75));
 console.log(transformaNota(85));
 console.log(transformaNota(95));