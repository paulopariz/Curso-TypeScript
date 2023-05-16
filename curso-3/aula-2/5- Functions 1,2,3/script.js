"use strict";
//Functions
//A interface de uma função é definida durante a sua declaração.
function somarr(a, b, c) {
    return a + b + (c ? c : 0);
}
somarr(1, 2, 3);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
//Void
//No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('#fefefe');
// Erro, void não pode ser verificado
//   if (pintarTela('#fefefe')) {
//   }
const btn = document.querySelector('button');
// Erro, void não pode ser verificado
//   if (btn && btn.click()) {
//   }
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
if (isString('teste')) {
    console.log('É string');
}
function calcular(forma) { }
function normalizarr(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizarr(" Produto ");
normalizarr(["Banana ", " UVA"]);
function a(seletor) {
    return document.querySelector(seletor);
}
a("a")?.href;
a("video")?.volume;
a(".teste")?.innerHTML;
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.23));
console.log(arredondar('202.23'));
