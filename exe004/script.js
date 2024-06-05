function posicionamentoAleatorio(element){
    
        //calcula o limite máximo para a posição X (horizontal)
    var x = window.innerWidth - element.clientWidth;

        //calcula o limite máximo para a posição Y (vertical)
    var y = window.innerHeight - element.clientHeight;

        //  Gera uma posição x aleatória dentro dos limites (no caso o limite é o valor dado pela variável x)
    var randomX = Math.floor(Math.random() * x )

        //  Gera uma posição x aleatória dentro dos limites (no caso o limite é o valor dado pela variável y)
    var randomY = Math.floor(Math.random() * y)

}