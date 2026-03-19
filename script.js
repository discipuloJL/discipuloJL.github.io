function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark-mode")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("dark-mode")) {
    img.setAttribute("src", "./assets/gon2.png")
    img.setAttribute(
      "alt",
      "Perfil de JL Code, personagem Gon de Hunter x Hunter, perspectiva diagonal",
    )
  }

  // se tiver sem light-mode, manter a imagem normal;
  else {
    // se tiver light-mode, adicionar a imagem light
    img.setAttribute("src", "./assets/gon1.png")
    img.setAttribute(
      "alt",
      "Perfil de JL Code, personagem Gon de Hunter x Hunter, perspectiva frontal",
    )
  }
}
