const sum = (x: number, y: number) => {
    return x + y
}
console.log(sum(5, 10));


const sum2 = (a: number, b: number): string | number => {
    return (a + b).toString()
}

const value = sum2(2, 3)





//VOID: não retorna nada
const log = (message: string): void => {
    console.log(message)
    // return message
}




//INTERFACES COM FUNCOES
interface MathFunc {
    (x: number, y: number): number
}

const soma: MathFunc = (x: number, y: number): number => {
    return x + y
}

const sub: MathFunc = (x: number, y: number): number => {
    return x - y
}