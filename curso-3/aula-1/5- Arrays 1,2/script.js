"use strict";
const numeros = [10, 20, 30];
const valores = [10, "preco", "taxas", 5, 3, 20, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filterValues(data) {
    return data.filter((item) => typeof item === "string");
}
console.log(filterValues(valores));
console.log(maiorQue10(numeros));
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
//EXERCICIO
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
    console.log(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
        <section>
            <h2 style="color: ${color};">${curso.nome}</h2>
            <p>Horas: ${curso.horas}</p>
            <p>Quantidade de aulas: ${curso.aulas}</p>
            <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
            <p>${curso.tags.join(", ")}</p>
            <p>${curso.idAulas.join(" | ")}</p>
        </section>
        `;
    });
}
