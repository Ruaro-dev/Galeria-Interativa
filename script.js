// 1. Lista de imagens e legendas que serão exibidas.
const fotos = [
    { arquivo: "imagens/foto1.jpg", legenda: "GP DA AUSTRALIA" },
    { arquivo: "imagens/foto2.jpg", legenda: "GP DA CHINA" },
    { arquivo: "imagens/foto3.jpg", legenda: "GP DO JAPÃO" },
    { arquivo: "imagens/foto4.jpg", legenda: "GP DE MIAMI" },
    { arquivo: "imagens/foto5.jpg", legenda: "GP DO CANADA" },
    { arquivo: "imagens/foto6.jpg", legenda: "GP DE MONACO" },
    { arquivo: "imagens/foto7.jpg", legenda: "GP DE BARCELONA" },
    { arquivo: "imagens/foto8.jpg", legenda: "GP DA AUSTRIA" },
    { arquivo: "imagens/foto9.jpg", legenda: "GP DA GRÃ-BRETANHA" },
    { arquivo: "imagens/foto10.jpg", legenda: "GP DA BELGICA" },
    { arquivo: "imagens/foto11.jpg", legenda: "GP DA HUNGRIA" },
    { arquivo: "imagens/foto12.jpg", legenda: "GP DA HOLANDA" },
    { arquivo: "imagens/foto13.jpg", legenda: "GP DA ITALIA" },
    { arquivo: "imagens/foto14.jpg", legenda: "GP DE MADRID" },
    { arquivo: "imagens/foto15.jpg", legenda: "GP DO AZERBAIJÃO" },
    { arquivo: "imagens/foto16.jpg", legenda: "GP DO BAHRAIN(NA MALASIA)" },
    { arquivo: "imagens/foto17.jpg", legenda: "GP DE SINGAPURA" },
    { arquivo: "imagens/foto18.jpg", legenda: "GP DOS ESTADOS UNIDOS" },
    { arquivo: "imagens/foto19.jpg", legenda: "GP DO MEXICO" },
    { arquivo: "imagens/foto20.jpg", legenda: "GP DO BRASIL" },
  ];
  
  // 2. Guarda a posição da foto que está sendo exibida.
  let indiceAtual = 0;
  
  // 3. Guarda o identificador do temporizador automático.
  let temporizador = null;
  
  // 4. Busca os elementos HTML pelos seus IDs.
  const imagem = document.getElementById("foto-principal");
  const legenda = document.getElementById("legenda");
  const contador = document.getElementById("contador");
  
  const botaoAnterior = document.getElementById("anterior");
  const botaoProxima = document.getElementById("proxima");
  const botaoIniciar = document.getElementById("iniciar");
  const botaoPausar = document.getElementById("pausar");
  
  // 5. Atualiza imagem, legenda e contador na tela.
  function mostrarFoto() {
    imagem.src = fotos[indiceAtual].arquivo;
    imagem.alt = fotos[indiceAtual].legenda;
    legenda.textContent = fotos[indiceAtual].legenda;
    contador.textContent =
      `Foto ${indiceAtual + 1} de ${fotos.length}`;
  }
  
  // 6. Avança uma posição. Se chegar ao final, volta ao início.
  function proximaFoto() {
    indiceAtual = (indiceAtual + 1) % fotos.length;
    mostrarFoto();
  }
  
  // 7. Volta uma posição. Se estiver no início, vai para a última.
  function fotoAnterior() {
    indiceAtual =
      (indiceAtual - 1 + fotos.length) % fotos.length;
    mostrarFoto();
  }
  
  // 8. Registra o que deve acontecer quando os botões forem clicados.
  botaoProxima.addEventListener("click", proximaFoto);
  botaoAnterior.addEventListener("click", fotoAnterior);
  
  // 9. Inicia a troca automática de imagens.
  function iniciarApresentacao() {
    // Evita criar vários temporizadores ao clicar repetidamente.
    if (temporizador !== null) {
      return;
    }
  
    temporizador = setInterval(proximaFoto, 2500);
  }
  
  // 10. Interrompe a troca automática.
  function pausarApresentacao() {
    clearInterval(temporizador);
    temporizador = null;
  }
  
  botaoIniciar.addEventListener("click", iniciarApresentacao);
  botaoPausar.addEventListener("click", pausarApresentacao);
  
  // 11. Exibe a primeira foto assim que a página é carregada.
  mostrarFoto();