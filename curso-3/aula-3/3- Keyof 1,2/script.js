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
//checkInterface
//O keyof pode ser utilizado para criarmos funções genéricas utilitárias.
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
async function handleData5() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface(jogo, 'desenvolvedora')) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData('/livro.json');
    if (checkInterface(livro, 'autor')) {
        console.log(livro.autor);
    }
}
handleData5();
function checkInterface(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
function checkInterfaceSimples(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
