//string, boolean, number..
let x: number = 10

x = 4

console.log(x)


//inferencia x annotation
let y = 20
// y = "teste"

let z: number = 20
//






//tipos basicos
let firstName: string = 'Paulo'
let age: number = 19
const isAdmin: boolean = true

// string != string

console.log(typeof firstName)

firstName = 'Joao'
console.log(firstName)





//object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)

console.log(firstName.toUpperCase())
myNumbers.push(4)

console.log(myNumbers)






//tuplas
let myTuple: [number, string, string[]]

myTuple = [1, "abc", ["teste1", "teste2"]]
// myTuple = ["werwe", 2, true]]
console.log(myTuple)






// object leterals -> {prop: value}
const user: { name: string, age: number } = {
    name: "Paulo",
    age: 19
}
console.log(user)
// user.job = "Programador"





//any
let a: any = 0

a = "teste"
a = true
a = []

console.log(a)





//union type
let id: string | number = 20

id = "100"

// id = true
// id = []

console.log("O tipo do id é: " + typeof + " " + " e o seu valor: " + id)





//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "23123"





//enum
// exemplo: tamanho de roupas

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M
}

const camisa2 = {
    name: "Camisa gola redonda",
    size: Size.P
}

console.log([camisa, camisa2])





// literal types
let teste: "autenticado" | null

// teste = "outro valor"
teste = "autenticado"
teste = null





// funcoes
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(12, 12))
// console.log(sum(12, true))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo("Paulo"))

function logger(msg: string): void {
    console.log(msg)
}
logger("Teste")

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Ola ${name}`)
}
greeting("José", "Sir")







// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 2 }))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers))







// narrowing 
//checagemde tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`)
        return
    }
    console.log("Não foi passado um numero")
}

doSomething(5)
doSomething(true)





// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)






// classes
class User {
    name
    age
    role
    isApproved

    constructor(name: string, age: number, role: string, isApproved: boolean) {
        this.name = name
        this.age = age
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuario é ${this.name}`)
    }
    showUserRole(canShow: boolean) {
        if (canShow) {
            console.log(`Idade do usuario é: ${this.role}`)
            return
        }
        console.log("Informacao restrita")
    }
}

const person = new User("Paulo", 19, "Admin", true)

console.log(person)

person.showUserName()

person.showUserRole(false)






// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)
fusca.showBrand()






// herenca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)
a4.showBrand()






// decorators
function BaseParamters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParamters()

class Person {
    name
    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)


