//Classes 
//As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.

// f HTMLElement()
console.log(document.constructor);

class Produto5 {
    tipo = 'produto';
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

const livro5 = new Produto5('O Senhor dos Anéis');


//Modificadores
//O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
class Produto6 {
    // public: é o padrão de qualquer uma
    // private: só pode ser acessada dentro da classe
    private tipo = 'produto';
    // protected: só pode ser acessada dentro da classe e subclasses
    protected preco: number;
    // readonly: só permite leitura
    readonly nome: string;
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getTipo() {
        return this.tipo;
    }
    getPreco() {
        return Produto6.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco: number) {
        return `R$ ${preco}`;
    }
}

const livro6 = new Produto6('O Senhor dos Aneis', 200);
console.log(livro6.getTipo());
console.log(livro6.getPreco());
console.log(livro6.nome);
console.log(Produto6.transformarPreco(100));





//Class e Interface
//Ao definirmos uma classe, a sua interface é gerada automaticamente pelo TypeScript. A definição da classe é o que utilizamos para verificar se um objeto é uma instância da mesma instanceof class.

class Quadrado {
    readonly lados = 4;
    medida: number;
    constructor(medida: number) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}

class Circulo {
    readonly PI = Math.PI;
    raio: number;
    constructor(raio: number) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    } else {
        return new Circulo(n);
    }
});

formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
