"use strict";
//TIPOS BASICOS E INFERENCIA DE TIPOS
let nome;
nome = "paulo";
let idade = 19;
// idade = "abs"
idade = 20;
// ARRAYS E TUPLAS
let lista;
lista = ["abc", "123"];
let aluno;
// aluno = [true, "paulo", 19]
aluno = ["paulo", 19, true];
//OBJETOS
let objeto;
objeto = { nome: 'paulo', idade: 19, x: true };
console.log(objeto);
//FUNCOES
function soma(a, b) {
    return a + b;
}
// const soma2 = (a: string, b: string): number => a + b
const soma2 = (a, b) => a + b;
let id;
let id1;
let id2;
let user;
let myUser;
let myAluno;
let person;
// person = { name: "Paulo", age: 19, course: "ADS", ira: 4.1 }
person = {
    name: "Paulo",
    age: 19,
    course: "ADS",
    ira: 4.1,
    car: "ferrari"
};
