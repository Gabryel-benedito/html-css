function removerAnimação(){
    let removerclasse = window.document.getElementById("divAnimada");

    removerclasse.classList.remove("foto");
}

let botão = window.document.getElementById("removerclasse");

botão.addEventListener('click', removerAnimação)


function colocarAnimação(){
    let removerclasse = window.document.getElementById("divAnimada");

    removerclasse.classList.add("foto");
}

let botão2 = window.document.getElementById("colocarclasse");

botão2.addEventListener('click',colocarAnimação)

