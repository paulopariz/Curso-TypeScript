"use strict";
//O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
// function normalizar(texto: any) {
//     return texto.trim().toLowerCase()
//}
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar(" DesIN"));
// console.log(normalizar(23423))
//Uso do Any
//Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
}
fetchJSON('https://api.origamid.dev/json/cursos.json');
//Any e Erros
// Any pode quebrar a aplicacao
// function mostrarCursos(cursos: Curso[]) {
//     cursos.forEach((curso) => {
//         document.body.innerHTML += `
//         <div>
//           <h2>${curso.nome}</h2>
//           <p>Horas: ${curso.horas}</p>
//         </div>
//       `;
//     });
// }
// const dados: any = 'o any gera problemas';
// mostrarCursos(dados);
