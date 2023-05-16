"use strict";
//Array
//Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().
async function fetchCursos2() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos2();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log('É instância de Array');
    }
    if (Array.isArray(data)) {
        console.log('É array');
    }
}
//Type Predicate
//TypeScript não executa JavaScript
//Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função isArray consegue ser usada como Type Guard?
//Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira
function isStringg(value) {
    return typeof value === 'string';
}
function handleDataa(data) {
    if (isStringg(data)) {
        data.toUpperCase();
    }
}
handleDataa('Origamid');
handleDataa(200);
//Objetos
//O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data);
    }
}
//EXERCICIOS
async function fetchCursos3() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos3(json);
}
fetchCursos3();
function isCurso(curso) {
    if (curso &&
        typeof curso === 'object' &&
        'nome' in curso &&
        'horas' in curso &&
        'tags' in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos3(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
            <br>
            <br>
            <br>
            <br>
          <section>
            <h2>${item.nome}</h2>
            <p>${item.horas}</p>
            <p>${item.tags.join(', ')}</p>
          </section>
        `;
        });
    }
}
