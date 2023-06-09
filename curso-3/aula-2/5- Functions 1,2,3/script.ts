//Functions
//A interface de uma função é definida durante a sua declaração.

function somarr(a: number, b: number, c?: number): number {
    return a + b + (c ? c : 0)
}

somarr(1, 2, 3)

const subtrair = (a: number, b: number) => a - b
subtrair(4, 3)


type Callback = (event: MouseEvent) => void;





//Void
//No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor: string) {
    document.body.style.background = cor;
}

pintarTela('#fefefe');

// Erro, void não pode ser verificado
//   if (pintarTela('#fefefe')) {
//   }

const btn = document.querySelector('button');

// Erro, void não pode ser verificado
//   if (btn && btn.click()) {
//   }

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
    if (typeof value === 'string') {
        return true;
    }
}

if (isString('teste')) {
    console.log('É string');
}



//Never
//O never é utilizado em casos onde a função gera um erro ou termina a aplicação.

// function abortar(mensagem: string): never {
//     throw new Error(mensagem)
// }

// abortar("umm erro ocoreu")
// console.log("tente novamente")



//Métodos
//Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.

interface Quadrado {
    lado: number;
    perimetro(lado: number): number;
}

function calcular(forma: Quadrado) { }





//Overload
//Existem funções que retornam diferentes dados dependendo do argumento.
//Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.
//O Overload deve ser compatível com a função original.

// Exemplo 1
function normalizarr(valor: string): string;
function normalizarr(valor: string[]): string[];
function normalizarr(valor: string | string[]): string | string[] {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    } else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}

normalizarr(" Produto ");
normalizarr(["Banana ", " UVA"]);

// Exemplo 2
function a(seletor: "video"): HTMLVideoElement | null;
function a(seletor: "div"): HTMLDivElement | null;
function a(seletor: "a"): HTMLAnchorElement | null;
function a(seletor: string): Element | null;
function a(seletor: string): Element | null {
    return document.querySelector(seletor);
}

a("a")?.href;
a("video")?.volume;
a(".teste")?.innerHTML;




//EXERCICIO
function arredondar(valor: number): number
function arredondar(valor: string): string
function arredondar(valor: number | string): number | string {
    if (typeof valor === 'number') {
        return Math.ceil(valor)
    } else {
        return Math.ceil(Number(valor)).toString()
    }
}
console.log(arredondar(200.23))
console.log(arredondar('202.23'))