function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light-mode")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light-mode")) {
    // se tiver light-mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto diagonal de José Lucas, pregando feliz de palitó escuro, camisa interna azul marinho sobre um púlpito de madeira com um microfone na mão direita e apontando a esquerda pra sua frente numa igreja com um letreiro atrás na parede azul claro escrito 'JESUS VEM' no estilo ghibli"
    )
  }

  // se tiver sem light-mode, manter a imagem normal;
  else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de José Lucas, pregando feliz de palitó azul escuro, camisa interna azul e gravata cor dourada sobre um púlpito de vidro com um microfone na mão esquerda numa igreja com um letreiro atrás na parede amarelada escrito 'Jesus vem' no estilo ghibli"
    )
  }
}
