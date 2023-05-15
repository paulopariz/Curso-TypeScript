//Union Types
//É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.
let mytotal: string | number = 200
mytotal = "400"
console.log(typeof mytotal + " " + mytotal)


//Funções
//Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.
function isNumber(value: string | number) {
    if (typeof value === 'number') {
        return true;
    } else {
        return false
    }
}

if (isNumber("200")) {
    console.log("é um numero")
} else {
    console.log("nao é um numero")
}





//DOM
//Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.

// Retorna HTMLButtonElement | null
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();







//EXERCICIO
function toNumber(value: number | string) {
    if (typeof value === 'number') {
        return value
    }
    else if (typeof value === 'string') {
        return Number(value)
    } else {
        throw "Value deve ser um number ou string"
    }
}

console.log(toNumber("200"))