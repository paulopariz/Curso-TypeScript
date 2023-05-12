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


// const soma2 = (a: string, b: string): number => a + b
const soma2 = (a: string, b: string): string => a + b






//UNIONS E TYPE ALIAS
type Id = number | string

let id: Id

let id1: Id
let id2: Id


type Usuario = { nome: string, idade: number }

let user: Usuario


// INTERFACES
type TUsuario = { nome: string, idade: number }

interface IUsuario {
    nome: string
    idade: number
}

let myUser: IUsuario

interface Props { }