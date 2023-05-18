"use strict";
const produto7 = {
    nome: 'Notebook',
    quantidade: 10,
    cor: 'azul',
};
const produto8 = {
    nome: 'Geladeira',
    quantidade: 4,
    freezer: true,
};
const servico1 = {
    nome: 'Instalação',
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto7);
mostrarQuantidade(produto8);
// erro, não possui quantidade
// mostrarQuantidade(servico1);
//Partial
//O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.
//Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log("Patial: " + produto.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto7);
mostrarQuantidadePartial(produto8);
mostrarQuantidadePartial(servico1);
const artigo = {
    titulo: 'Como aprender HTML',
    visualizacoes: 3000,
    tags: ['Front End', 'HTML'],
    autor: 'André',
};
artigo.autor;
artigo.descricao;
function handlePost(post) {
    document.body.innerHTML += `${post.autor}`;
}
handlePost(artigo);
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
    titulo: 'Paulo',
});
