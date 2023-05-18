"use strict";
//keyof
//Indica que o dado é uma chave de uma Interface/Tipo.
let chave;
// let chave: "nome" | "produto";
chave = "nome";
chave = 'preco';
//typeof
//Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar('body');
