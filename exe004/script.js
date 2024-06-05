        window.document.getElementById("goku_black").addEventListener('click' , function(){
                    // Obtém a altura e a largura da tela
                const largura = window.innerWidth;
                const altura = window.innerHeight;

                        // Gera posições aleatórias 
                const randomX = Math.floor(Math.random()* (largura - this.clientWidth));
                const randomY = Math.floor(Math.random()* (altura -  this.clientHeight));

                            //define a nova posição de goku_black
                this.style.left = randomX + 'px';
                this.style.top = randomY + 'px';
        })


        window.document.getElementById("madara").addEventListener('click' , function(){
            const width = window.innerWidth;
            const height = window.innerHeight;

                    const randomX = Math.floor(Math.random() * (width - this.clientWidth));
                    const randomY = Math.floor(Math.random() * (height - this.clientHeight));

                            this.style.left = randomX + 'px';
                            this.style.top = randomY + 'px';
        })