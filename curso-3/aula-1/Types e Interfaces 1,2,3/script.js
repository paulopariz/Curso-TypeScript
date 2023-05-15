"use strict";
//Object
//É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
let total1 = 10;
total1 = '200';
function preencherDados(dados) {
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
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
    else if (categoria === 'codigo') {
        console.log('Pintar verde');
    }
    else if (categoria === 'descod') {
        console.log('Pintar roxo');
    }
}
pintarCategoria('codigo');
//EXERCICIO
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
    console.log(data);
}
fetchProduct();
function showProduct(data) {
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
