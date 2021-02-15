
/*Desafio 4*/

/*
    Baseado no Array de Livros por Categoria abaixo, faça os eguintes desafios:
        * Contar o número de categorias e o número de livros em cada categoria;
        * Contar o número de autores;
        * Mostrar livros do autor Augusto Cury;
        * Transformar a função acima em uma função que irá receber o nomo do autor e devolver os livros desse autor;
*/

const livrosPorCategoria=[
    {
        categoria:"Riqueza",
        livros:[
            {
                titulo:'Os segredos da mente milionária',
                autor:'T. Harv Eker'
            },
            {
                titulo:'O homem mais rico da Babilônia',
                autor:'George S. Clason'
            },
            {
                titulo:'Pai rico, pai pobre',
                autor:'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        categoria:"Inteligência Emocional",
        livros:[
            {
                titulo: 'Você é insubstituível',
                autor: 'Augusto Cury'
            },
            {
                titulo:'Ansiedade - como enfrentar o mal do século',
                autor: 'Augusto Cury'
            },
            {
                titulo:'Os 7 hábitos das pessoas altamente eficazes',
                autor: 'Stephen R Covey'
            }
        ]
    }
];

//total de categorias
const totCategorias = livrosPorCategoria.length;
console.log(`Total de categoria: ${totCategorias}`);

//total de livros em cada categoria;
livrosPorCategoria.forEach(categoria => {
    console.log(`Total de livros da categoria "${categoria.categoria}": ${categoria.livros.length}`);
});

//total de autores
function contaAutores(){
    let autores=[];

    for(let categoria of livrosPorCategoria){
        for(let livro of categoria.livros){
            if(autores.indexOf(livro.autor) == -1){
                autores.push(livro.autor)
            }
        }
    }

    console.log('Total de autores: ' + autores.length);
}

contaAutores()

function livrosPorAutor(autor){
    let livros=[];

    for(let categoria of livrosPorCategoria){
        for(let livro of categoria.livros){
            if(livro.autor === autor){
                livros.push(livro.titulo)
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${livros.join(", ")}`);
}
livrosPorAutor('Augusto Cury');