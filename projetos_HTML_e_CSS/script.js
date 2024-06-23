
const menuConteiner = window.document.getElementById('menu-conteiner');
const butão =  window.document.getElementById('btn-menu');

butão.addEventListener('click' , () => {
    menuConteiner.classList.toggle('btn-expandir')
});