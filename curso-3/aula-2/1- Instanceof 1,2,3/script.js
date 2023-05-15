"use strict";
//class
//Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
//instanceof
//Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro("O Hobbit", "J. R. R. Tolkien");
    }
    if (busca === 'Dark Souls') {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
const product = buscarProduto('O Hobbit');
if (product instanceof Livro) {
    console.log(product.autor);
}
if (product instanceof Jogo) {
    console.log(product.nome);
}
if (product instanceof Produto) {
    console.log(product.nome);
}
const jogo1 = {
    nome: 'Dark Souls',
};
// Erro
if (jogo1 instanceof Produto) {
}
