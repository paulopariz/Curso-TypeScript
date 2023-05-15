"use strict";
const numeros = [10, 20, 30];
const valores = [10, "preco", "taxas", 5, 3, 20, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filterValues(data) {
    return data.filter((item) => typeof item === "string");
}
console.log(filterValues(valores));
console.log(maiorQue10(numeros));
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
