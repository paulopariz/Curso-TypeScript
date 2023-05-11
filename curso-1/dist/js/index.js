"use strict";
//string, boolean, number..
let x = 10;
x = 4;
console.log(x);
//inferencia x annotation
let y = 20;
// y = "teste"
let z = 20;
//
//tipos basicos
let firstName = 'Paulo';
let age = 19;
const isAdmin = true;
// string != string
console.log(typeof firstName);
firstName = 'Joao';
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(4);
console.log(myNumbers);
//tuplas
let myTuple;
myTuple = [1, "abc", ["teste1", "teste2"]];
// myTuple = ["werwe", 2, true]]
console.log(myTuple);
// object leterals -> {prop: value}
const user = {
    name: "Paulo",
    age: 19
};
console.log(user);
// user.job = "Programador"
//any
let a = 0;
a = "teste";
a = true;
a = [];
console.log(a);
//union type
let id = 20;
id = "100";
// id = true
// id = []
console.log("O tipo do id é: " + typeof +" " + " e o seu valor: " + id);
const userId = 10;
const productId = "23123";
//enum
// exemplo: tamanho de roupas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M
};
const camisa2 = {
    name: "Camisa gola redonda",
    size: Size.P
};
console.log([camisa, camisa2]);
// literal types
let teste;
// teste = "outro valor"
teste = "autenticado";
teste = null;
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum(12, true))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Paulo"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Ola ${name}`);
}
greeting("José", "Sir");
