//Generics
//Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.


function retorno<variavel>(a: variavel): variavel {
    return a
}

console.log(retorno<string>("ABC"))
console.log(retorno(100))
console.log(retorno(true))



const numeros1 = [1, 2, 3, 4, 5, 6, 7]
const frutas = ["Banana", "Uva", "Pera", "Maçã", "Laranja", "Limão", "Morango"]

function firstFive<T>(lista: T[]): T[] {
    return lista.slice(0, 5)
}

console.log(firstFive(numeros1))
console.log(firstFive(frutas).map((item) => item))





function notNull<T>(arg: T) {
    if (arg !== null) return arg
    else return null
}

console.log(notNull('Paulo')?.toLowerCase())
notNull(200)?.toFixed()




function tipoDado<T>(a: T): { dado: T; tipo: string } {
    const result = {
        dado: a,
        tipo: typeof a
    }
    console.log(result)
    return result
}


tipoDado("teste").tipo
tipoDado(true).tipo
tipoDado(2000).tipo




//extends
//É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.

function extractText<Tipo extends HTMLElement>(el: Tipo): string {
    return el.innerText;
}

const linkk = document.querySelector('a');

if (linkk) {
    console.log(extractText(linkk));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

function $<Tipo extends Element>(selector: string): Tipo | null {
    return document.querySelector(selector);
}

const link2 = $<HTMLAnchorElement>('a')?.href;






//Métodos
//Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.

const link3 = document.querySelector<HTMLAnchorElement>(".link")
if (link3 instanceof HTMLVideoElement) {
    link3?.volume
}


async function getData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

interface Notebook {
    nome: string;
    preco: number;
}

async function handleData() {
    const notebook = await getData<Notebook>(
        'https://api.origamid.dev/json/notebook.json',
    );
    console.log(notebook.nome);
    console.log(notebook.preco);
}

handleData()