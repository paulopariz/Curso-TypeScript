//keyof
//Indica que o dado é uma chave de uma Interface/Tipo.

interface Product6 {
    nome: string
    preco: number
    novo: boolean
}

let chave: keyof Product6
// let chave: "nome" | "produto";


chave = "nome"
chave = 'preco';





//typeof
//Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.

function coordenadas(x: number, y: number) {
    return { x, y };
}

let coord: typeof coordenadas;
coord = (x: number, y: number) => {
    return { x, y };
};




//querySelector
//É com o keyof que o querySelector consegue associar uma string com a Interface que ela retorna.

interface Elementos {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    div: HTMLElement;
    body: HTMLBodyElement;
    audio: HTMLAudioElement;
}

function selecionar<Chave extends keyof Elementos>(
    seletor: Chave,
): null | Elementos[Chave] {
    return document.querySelector(seletor);
}

selecionar('body');
