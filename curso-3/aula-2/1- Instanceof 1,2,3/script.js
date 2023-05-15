"use strict";
//class
//Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro1 = new Produto("A guerra dos tronos", 200);
console.log(livro1.nome, livro1.preco, livro1.precoReal());
console.log(livro1 instanceof Produto);
//instanceof
//Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo(1);
    }
    return null;
}
const product = buscarProduto('O Hobbit');
if (product instanceof Livro) {
    console.log(product.autor);
}
if (product instanceof Jogo) {
    console.log(product.jogadores);
}
