// TIPOS BASICOS

let age: number = 19
const firstName = "Paulo"

let isValid: boolean = true
//ERRO
//O tipo 'number' não pode ser atribuído ao tipo 'boolean'.ts(2322)
//isValid = 30
isValid = false

let idk: any = 5
idk = "lscpsdc"
idk = true


const ids: number[] = [1, 2, 3, 4, 5, 6, 7]
const booleans: boolean[] = [true, true, false, true, false]
const names: string[] = ["Paulo", "Maria", "João"]






// TUPLA
const person: [number, string] = [1, "abc"]
// const person2 : [number, string] = ["abc, 1"]

//Lista de tuplas
const people: [number, string][] = [
    [1, "Jane"],
    [2, "Doe"],
    // ["absc", 3 ]
]




// Intersections
const productId: string | number = 1




// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "Esquerda"
}

const direction = Direction.Down
console.log(direction)





// Type Assertions
const productName: any = "Boné"

// let itemId = productName as string
let itemId = <string>productName
