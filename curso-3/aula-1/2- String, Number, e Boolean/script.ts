//typeof
//typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.


// const frase = 'Front End';
// const preco = 500;
// const condi = preco > 100;

// if (typeof frase === 'string') {
//   console.log('frase é string');
// }
// if (typeof preco === 'number') {
//   console.log('preco é number');
// }
// if (typeof condi === 'boolean') {
//   console.log('condi é boolean');
// }

const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
