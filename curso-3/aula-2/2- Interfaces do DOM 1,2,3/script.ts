//querySelector
//Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.

const video = document.querySelector("#video")
if (video instanceof HTMLVideoElement) {
    console.log(video.volume)
}



//querySelectorAll
//O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.

const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);

links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    } else {
        console.log(typeof link);
    }
});

// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);

// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter(
    (link) => link instanceof HTMLAnchorElement,
);
