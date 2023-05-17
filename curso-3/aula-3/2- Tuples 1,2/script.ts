//Tuples
//Tuples são arrays que possuem dados em posições fixas.

// const produto4: (string | number)[] = ['Notebook', 2500];
// const produto5: [string, number] = ['Notebook', 2500];

// const nome1 = produto4[0]; // string | number
// const nome2 = Produto5[0]; // string

// const [nome, preco] = produto5;






//as const
//Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.

function getText(selector: string) {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) {
        return [el, el.innerText] as const;
    } else {
        return null;
    }
}

const button5 = getText('button');

if (button5) {
    const [buttonElement, buttonText] = button5;
}
