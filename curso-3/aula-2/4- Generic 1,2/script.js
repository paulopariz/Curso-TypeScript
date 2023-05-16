"use strict";
//Generics
//Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
function retorno(a) {
    return a;
}
console.log(retorno("ABC"));
console.log(retorno(100));
console.log(retorno(true));
const numeros1 = [1, 2, 3, 4, 5, 6, 7];
const frutas = ["Banana", "Uva", "Pera", "Maçã", "Laranja", "Limão", "Morango"];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros1));
console.log(firstFive(frutas).map((item) => item));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull('Paulo')?.toLowerCase());
notNull(200)?.toFixed();
function tipoDado(a) {
    const result = {
        dado: a,
        tipo: typeof a
    };
    console.log(result);
    return result;
}
tipoDado("teste").tipo;
tipoDado(true).tipo;
tipoDado(2000).tipo;
//extends
//É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
function extractText(el) {
    return el.innerText;
}
const linkk = document.querySelector('a');
if (linkk) {
    console.log(extractText(linkk));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
function $(selector) {
    return document.querySelector(selector);
}
const link2 = $('a')?.href;
//Métodos
//Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
const link3 = document.querySelector(".link");
if (link3 instanceof HTMLVideoElement) {
    link3?.volume;
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
    console.log(notebook.preco);
}
handleData();
