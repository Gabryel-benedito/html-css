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
    const novaY = evento.clientY - conteiner.getBoundingClientRect().top - y;

            // Verifica os limites da tela para evitar que o elemento saia da tela
    const limiteEsquerdo = 0;
    const limiteDireito = window.innerWidth - elemento.offsetWidth;
    const limiteSuperior = 0;
    const limiteInferior = window.innerHeight - elemento.offsetHeight;

                //faz com que não ultrapasse o limite da tela 
        if(novaX < limiteEsquerdo){
            novaX = limiteEsquerdo
        };
        if(novaX > limiteDireito){
            novaX = limiteDireito
        };
        if(novaY < limiteSuperior){
            novaY = limiteSuperior
        };
        if(novaY > limiteInferior){
            novaY = limiteInferior
        };
        

                //faz com que o elemento se mova adicionando o valor em px para o elemento
        if(estaSeMovendo == true){
            elemento.style.left = novaX + "px";
            elemento.style.top = novaY + "px";
            console.log(`este é x ${novaX} , esse é y ${novaY}`);
        }
});

        //faz com que ao soltar o click do mouse a variavel contenha o valor false fazendo a função acima não permitir com que o elemento se mova
elemento.addEventListener("mouseup" , () => {
    estaSeMovendo = false;
});