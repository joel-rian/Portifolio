document.addEventListener("DOMContentLoaded", function() {

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animações gerais de fade/slide
        entry.target.classList.add('visible');

        // LÓGICA ESPECÍFICA PARA AS BARRAS DE HABILIDADE
        // Verifica se o elemento que entrou na tela é a seção de skills
        if (entry.target.classList.contains('skill-section')) { // <-- MUDANÇA SUTIL AQUI
          const progressBars = entry.target.querySelectorAll('.progress span');
          
          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            
            // Define a variável CSS na própria barra
            bar.style.setProperty('--progress-width', targetWidth);
            
            // Adiciona a classe para ativar a animação
            bar.classList.add('progress-bar-animated');
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    root: null,
    threshold: 0.2 // Aumentei um pouco para garantir que a seção esteja mais visível
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(element => {
    observer.observe(element);
  });

});
