/*Desafio 3*/
/*Crie uma função que recebe uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra.
     C = (F-32) * 5/9
     F = C * 9/5 + 32
*/

function transformaGraus(temp){
    const celsiusExiste= temp.toUpperCase().includes('C');
    const fahrenheitExiste = temp.toUpperCase().includes('F');

    if(!celsiusExiste && !fahrenheitExiste){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C
    let grau = Number(temp.toUpperCase().replace('F', ""));
    let formula = (fahrenheit) => (fahrenheit-32) * 5/9;
    let sinalGrau = 'C';

    //fluxo alternativo
    grau = Number(temp.toUpperCase().replace('C', ""));
    formula = (celsius) => celsius * 9/5 + 32;
    sinalGrau = 'F';

    return formula(grau) + sinalGrau;
}

try{
    console.log(transformaGraus('10C'));
    console.log(transformaGraus('50C'));
}catch(error){
    console.log(error.message);
}


