//Object
//É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

type NumberOrString = number | string;

let total1: NumberOrString = 10;
total1 = '200';

type Produto = {
    nome: string;
    preco: number;
    teclado: boolean;
};

function preencherDados(dados: Produto) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    } else if (categoria === 'codigo') {
        console.log('Pintar verde');
    } else if (categoria === 'descod') {
        console.log('Pintar roxo');
    }
}

pintarCategoria('codigo');
