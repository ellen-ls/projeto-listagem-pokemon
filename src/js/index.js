const botaoAlterarTema = document.getElementById("botao-alterar-tema")
console.log(botaoAlterarTema)

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const body = document.querySelector("body")
console.log(body);

botaoAlterarTema.addEventListener("click", ()=>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")
    
    if(modoEscuroAtivo){
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    
    }else{
       
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
    

   

    
})

