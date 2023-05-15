//Object
//É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

type NumberOrString = number | string;

let total1: NumberOrString = 10;
total1 = '200';

interface InterfaceProduto {
    nome: string;
    preco: number;
    teclado: boolean;
}

type TypeProduto = {
    nome: string;
    preco: number;
    teclado: boolean;
};


function preencherDados(dados: TypeProduto) {
    //     document.body.innerHTML += `
    //   <div>
    //     <h2>${dados.nome}</h2>
    //     <p>R$ ${dados.preco}</p>
    //     <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
    //   </div>
    //   `;
}

preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: false,
});

preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: true,
});



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




//EXERCICIO
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
    console.log(data)
}

fetchProduct();

interface Empresa {
    fundacao: number;
    nome: string;
    pais: string;
}

interface Produtos {
    nome: string;
    garantia: string;
    preco: number;
    seguroAcidentes: boolean;
    descricao: string;
    empresaFabricante: Empresa
    empresaMontadora: Empresa
}

function showProduct(data: Produtos) {
    document.body.innerHTML = `
      <section>
        <h2>${data.nome}</h2>
        <p>${data.descricao}</p>
        <p>R$ ${data.preco}</p>
        <p>${data.seguroAcidentes}</p>
        <h2>Empresa Fabricante: ${data.empresaFabricante.nome}</h2>
        <p>Pais: ${data.empresaFabricante.pais}</p>
        <h2>Empresa Montadora: ${data.empresaMontadora.nome}</h2>
        <p>Pais: ${data.empresaMontadora.pais}</p>
        </section>
    `;
}