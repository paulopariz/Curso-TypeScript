"use strict";
// TIPOS BASICOS
let age = 19;
const firstName = "Paulo";
let isValid = true;
//ERRO
//O tipo 'number' não pode ser atribuído ao tipo 'boolean'.ts(2322)
//isValid = 30
isValid = false;
let idk = 5;
idk = "lscpsdc";
idk = true;
const ids = [1, 2, 3, 4, 5, 6, 7];
const booleans = [true, true, false, true, false];
const names = ["Paulo", "Maria", "João"];
// TUPLA
const person = [1, "abc"];
// const person2 : [number, string] = ["abc, 1"]
//Lista de tuplas
const people = [
    [1, "Jane"],
    [2, "Doe"],
    // ["absc", 3 ]
];
// Intersections
const productId = 1;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Down;
console.log(direction);
// Type Assertions
const productName = "Boné";
// let itemId = productName as string
let itemId = productName;
