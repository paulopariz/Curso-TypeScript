//null
//null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

const button1 = document.querySelector('button')
const config = localStorage.getItem('config')

if (button1 !== null) {
    button1.click()
}

if (button1) {
    button1.click()
}

button1?.click()





//undefined
//undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

let total2

function teste1() { }

console.log(typeof total2)

if (total2) {
    console.log("Total foi definido")
} else {
    console.log("Total não foi definido")
}




//Propriedades Opcionais
//Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.

interface Product {
    nome?: string;
}

const livro: Product = {};
const jogo: Product = {
    nome: 'Ragnarok',
};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
