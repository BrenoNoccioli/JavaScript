/*Desafio 2*/
/*Sistema de gastos familiares
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *receitas:[];
        *despesas:[];

    Agora, crie uma função que irá calcular o total de receitas edespesas e mostrará uma mensagem se a família está com saldo positivo ou negativo, seguido do saldo.
*/

let familia={
    receitas:[2500, 3000, 150, 500],
    despesas:[50,1700, 800, 480, 1250]
}

function soma(array){
    let total = 0;

    array.forEach(i => {
        total += i;
    });

    return total;
}

function calculaSaldo(){
    let totReceitas = soma(familia.receitas);
    let totDespesas = soma(familia.despesas);
    
    let saldo = totReceitas - totDespesas;

    if(saldo > 0){
        console.log(`Seu saldo é de R$${saldo}. Continue economizando!`);
    } else if(saldo < 0){
        console.log(`Seu saldo é de R$${saldo}. Atenção você está em dívida!`);
    } else{
        console.log(`Seu saldo é de R$${saldo}. Você não tem dívidas nem lucros.`);
    }

    return saldo.toFixed(2);
}

console.log(calculaSaldo());