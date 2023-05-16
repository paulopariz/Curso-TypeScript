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
