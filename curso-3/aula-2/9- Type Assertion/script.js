"use strict";
//as
//Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original.
//Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
const video1 = document.querySelector('.player');
// erro runtime, não existe volume de null
video1.volume;
async function fetchProduto4() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto4();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto4());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto4();
    produto.nome;
}
//! non-null operator
//Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.
//Esse é um operador de TS !. e não de JS como o ?.. Durante a compilação ele será removido.
// const video = document.querySelector('video')!;
// // erro runtime, não existe volume de null
// video.volume;
// // erro runtime
// document.querySelector('a')!.href = 'https://www.origamid.com';
//Outras Sintaxes
// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector('.player');
// const video3 = document.querySelector<HTMLVideoElement>('.player');*
// const video4 = document.querySelector('.player');
// video1.volume;
// video2.volume;
// video3?.volume;
// (video4 as HTMLVideoElement).volume;
