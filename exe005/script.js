const conteiner = window.document.getElementById("conteiner");
const elemento = window.document.getElementById("elemento");

let x = 0;
let y =0;

let estaSeMovendo = false;

elemento.addEventListener('mousedown' , function(evento){
    estaSeMovendo = true;


            // registra as posições X e Y do mouse
    x = evento.clientX - elemento.getBoundingClientRect().left;
    y = evento.clientY - elemento.getBoundingClientRect().top;
});

elemento.addEventListener('mousemove' , function (evento){
    const novaX = evento.clientX - conteiner.getBoundingClientRect().left - x;
    const novaY = evento.clientX - conteiner.getBoundingClientRect().top - y;
        if(estaSeMovendo){
            elemento.style.left = novaX + "px";
            elemento.style.top = novaY + "px";
            console.log(`este é x ${novaX} , esse é y ${novaY}`);
        }
});