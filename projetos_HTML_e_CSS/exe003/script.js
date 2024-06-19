


window.document.getElementById("animado").addEventListener('click', function removerANimação(){
    let remover = window.document.getElementById("animado");
    let removeParagrafo =  window.document.getElementById("parara");

    remover.classList.remove("conteiner");
    removeParagrafo.classList.remove("iluminati")



    setTimeout(function(){
        remover.classList.add("conteiner");
        removeParagrafo.classList.add("iluminati")
    }, 3000);
})

