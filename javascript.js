document.addEventListener("DOMContentLoaded", function () {

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (
          entry.target.classList.contains('skill-section') &&
          !entry.target.dataset.animated
        ) {
          const progressBars = entry.target.querySelectorAll('.progress span');

          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.setProperty('--progress-width', targetWidth);
            bar.classList.add('progress-bar-animated');
          });

          entry.target.dataset.animated = "true";
        }

      } else {
        entry.target.classList.remove('visible');
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

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.querySelector(".menu-toggle");
  const btnTopo = document.getElementById("btn-topo");

  if (!sidebar) return;

  sidebar.classList.toggle("active");

  const aberto = sidebar.classList.contains("active");

  // trava / libera scroll
  document.body.classList.toggle("sidebar-open", aberto);


  // esconder/mostrar botão do menu
  if (menuToggle) {
    menuToggle.classList.toggle("hidden", aberto);
  }

  // esconder/mostrar botão voltar ao topo
  if (btnTopo) {
    btnTopo.style.display = aberto ? "none" : "block";
  }
}


const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {
  window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollAtual > alturaTotal * 0.5) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

