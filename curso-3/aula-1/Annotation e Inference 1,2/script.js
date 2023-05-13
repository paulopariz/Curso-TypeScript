"use strict";
//ANNOTAION
//Com o TypeScript podemos indicar qual será o tipo de dado de uma variável através de anotações (: string).
let produto = "livro";
let preco = 150;
// produto = 10
// preco = "livro"
produto = "relogio";
preco = 200;
const carro = {
    marca: "Audi",
    portas: 4
};
console.log(carro.marca = "ferrari");
//INFERENCE
//O TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.
let produto2 = "CADERNO";
let preco2 = 30;
const carro2 = {
    marca2: "Ferrari",
    portas2: 2
};
const barato = 200 < 400 ? true : "produto caro";
// console.log(barato)
//FUNÇÕES
//As anotações serão necessárias quando lidamos com funções.
function somar(a, b) {
    return a + b;
}
// somar(4, "10")
somar(4, 10);
const nintendo = {
    nome: "Nintendo",
    preco: "2000"
};
function transPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transPreco(nintendo);
console.log(produtoNovo);
