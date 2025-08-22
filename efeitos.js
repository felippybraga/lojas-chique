AOS.init();

const frases = [
    "Estilo e Elegância para Todos os Momentos",
    "Mais do que vestir, é se encontrar",
    "Elegância que abraça o seu jeito de ser",
]

let index = 0;
  const fraseEl = document.getElementById("slogan");

  function mostrarFrase() {
    fraseEl.style.opacity = 0;
    setTimeout(() => {
      fraseEl.textContent = frases[index];
      fraseEl.style.opacity = 1;
      index = (index + 1) % frases.length;
    }, 500); 
  }

  mostrarFrase();
  setInterval(mostrarFrase, 3000);



  let celularAtivo = false;
  let desktopAtivo = false;
  let intervalo;
  
  // Função para limpar o que estava rodando antes
  function resetarCarrossel() {
    clearInterval(intervalo);
  
    // Remover classes de animação
    document.querySelectorAll(".album").forEach(img => {
      img.classList.remove("animado");
    });
  
    // Resetar transformações do carrossel mobile
    const slides = document.querySelector(".carrossel .slides");
    if (slides) slides.style.transform = "translateX(0)";
  }
  
  // Função para modo celular
  function iniciarCarrosselCelular() {
    celularAtivo = true;
    desktopAtivo = false;
    let slideIndex = 0;
    const slides = document.querySelector(".carrossel .slides");
    const totalSlides = document.querySelectorAll(".carrossel .album").length;
  
    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  
    showSlide(slideIndex);
  
    intervalo = setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    }, 3000);
  }
  
  // Função para modo desktop
  function iniciarCarrosselDesktop() {
    desktopAtivo = true;
    celularAtivo = false;
    const imagens = document.querySelectorAll(".album");
    let indexAtual = 0;
  
    function animarProximaImagem() {
      imagens.forEach(img => img.classList.remove("animado"));
      imagens[indexAtual].classList.add("animado");
      indexAtual = (indexAtual + 1) % imagens.length;
    }
  
    animarProximaImagem();
  
    intervalo = setInterval(animarProximaImagem, 3000);
  }
  
  // Verifica e ativa o modo certo
  function verificarTamanhoTela() {
    const largura = window.innerWidth;
  
    resetarCarrossel();
  
    if (largura <= 799 && !celularAtivo) {
      iniciarCarrosselCelular();
    } else if (largura > 799 && !desktopAtivo) {
      iniciarCarrosselDesktop();
    }
  }
  
  // Inicia ao carregar a página
  document.addEventListener("DOMContentLoaded", () => {
    verificarTamanhoTela();
  });
  
  // Verifica de novo sempre que a tela for redimensionada
  window.addEventListener("resize", () => {
    verificarTamanhoTela();
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const reniciar = document.getElementById('reniciar')

    reniciar.addEventListener('click', function() {
        resetarCarrossel()
        iniciarCarrosselDesktop()
        showSlide()
        animarProximaImagem()
    })

})

document.addEventListener("DOMContentLoaded", () => {
    const subir = document.getElementById('subir')

    subir.addEventListener('click', function() {
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
        })
    })

})

