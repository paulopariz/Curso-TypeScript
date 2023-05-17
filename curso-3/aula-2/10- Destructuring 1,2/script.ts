//Destructuring
//Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }


const { body }: { body: HTMLElement } = document

interface Product2 {
    nome: string;
    preco?: number
}

function handleData2({ nome, preco }: Product2) {
    nome.includes("book")
    preco?.toFixed()
}


handleData2({
    nome: "Notebook",
    preco: 2000
})




//Conhecer os Dados
//Durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.

function handleClickk2({
    currentTarget,
    pageX,
}: {
    currentTarget: EventTarget | null;
    pageX: number;
}) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
    }
}

document.documentElement.addEventListener('click', handleClickk2);
