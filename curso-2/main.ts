//TIPOS BASICOS E INFERENCIA DE TIPOS
let nome: string
nome = "paulo"

let idade = 19
// idade = "abs"
idade = 20




// ARRAYS E TUPLAS
let lista: string[]
lista = ["abc", "123"]


let aluno: [string, number, boolean]
// aluno = [true, "paulo", 19]
aluno = ["paulo", 19, true]





//OBJETOS
let objeto: { nome: string, idade: number, x: boolean }
objeto = { nome: 'paulo', idade: 19, x: true }

console.log(objeto)





//FUNCOES
function soma(a: number, b: number): number {
    return a + b
}