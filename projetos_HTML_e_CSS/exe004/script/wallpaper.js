const texto = window.document.getElementById("texto");
const conteiner = window.document.getElementById("conteiner");

let estaMovendo = false;

let x = 0;
let y = 0;

texto.addEventListener('mousedown', function (evento) {
    estaMovendo = true;

    x = evento.clientX - texto.getBoundingClientRect().left;
    y = evento.clientY - texto.getBoundingClientRect().top;
                console.log("esta lendo o mouse down")
});

texto.addEventListener('mousemove', function (evento) {
    let newX = evento.clientX - conteiner.getBoundingClientRect().left - x;
    let newY = evento.clientY - conteiner.getBoundingClientRect().top - y;

    const leftLimit = 0;
    const rightLimit = window.innerWidth - texto.offsetWidth;
    const topLimit = 0;
    const downLimit = window.innerHeight - texto.offsetHeight;

    if (newX < leftLimit) {
        newX = leftLimit
    };

    if (newX > rightLimit) {
        newX = rightLimit
    };

    if (newY < topLimit) {
        newY = topLimit
    };

    if (newY > downLimit) {
        newY = downLimit
    };


    if (estaMovendo == true) {
        texto.style.left = newX + "px";
        texto.style.top = newY + "px";
                console.log(`esta é sua posção X ${newX}, e esta é sua posição Y ${newY}`);
    };
});


texto.addEventListener('mouseup', () =>{
    estaMovendo = false;
            console.log("está lendo mouse up")
});

texto.addEventListener('mouseout', () =>{
    estaMovendo = false;
            console.log("está lendo mouseout")
});