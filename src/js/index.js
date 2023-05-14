alert('Bem vindo(a) há pokedex!');

const botaoAlterarTema = document.getElementById('botao-alterar-tema');

const body = document.querySelector('body');

const imagemBotaoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuro = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuro){
        imagemBotaoTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        imagemBotaoTema.setAttribute("src", "./src/imagens/moon.png")
    }
});
