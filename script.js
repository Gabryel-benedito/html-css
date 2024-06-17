
    //ficar com a cor fixa quando clica
const menuItem = window.document.querySelectorAll('.menu-item');

function selectLink() {
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
};

menuItem.forEach((item)=>
    item.addEventListener('click' , selectLink)
);

//expandir o menu

const btnesp = window.document.querySelector('#btn-esp');
const menu = window.document.querySelector('.menu-conteiner');


btnesp.addEventListener('click' , ()=> {
    menu.classList.toggle('btn-expandir');
});