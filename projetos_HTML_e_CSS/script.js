
const menuConteiner = window.document.getElementById('menu-conteiner');
const butão =  window.document.getElementById('btn-menu');

butão.addEventListener('click' , () => {
    menuConteiner.classList.toggle('btn-expandir')
});


const foto = window.document.getElementById('foto');

foto.addEventListener('mouseenter' , () => {
    foto.classList.add('foto-ativa');
    foto.classList.add('cont-ativo');
})

foto.addEventListener('mouseout' , () => {
    foto.classList.remove('foto-ativa');
    foto.classList.remove('cont-ativo');
})


