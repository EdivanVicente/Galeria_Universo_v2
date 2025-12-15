/* =========================================================
   DADOS DAS GALERIAS (NÃO ALTERAR)
   ========================================================= */

const galleryData = {
  galaxias: {
    title: "GALÁXIAS",
    images: [
      {
        src: "./assets/img_g1f1.svg",
        caption:
          "VIA LÁCTEA, CONCEPÇÃO ARTÍSTICA DA GALÁXIA EM QUE ESTAMOS. ELA TEM FORMATO ESPIRAL COM DOIS BRAÇOS PRINCIPAIS E OUTROS BRAÇOS MENORES.",
        credit: "NASA/JPL-Caltech",
      },
      {
        src: "./assets/img_g1f2.svg",
        caption:
          "A GALÁXIA DE ANDRÔMEDA É A MAIS MASSIVA DO GRUPO DE GALÁXIAS QUE INCLUI A VIA LÁCTEA. EM ESPIRAL, ESTÁ A 2,5 MILHÕES DE ANOS-LUZ DA TERRA.",
        credit: "NASA/JPL/California Institute of Technology",
      },
      {
        src: "./assets/img_g1f3.svg",
        caption:
          "GALÁXIA DO SOMBREIRO, TAMBÉM POSSUI FORMA ESPIRAL E ESTÁ A 30 MILHÕES DE ANOS-LUZ DE DISTÂNCIA DA TERRA.",
        credit: "NASA, ESA, CSA, STScI / Flickr",
      },
      {
        src: "./assets/img_g1f4.svg",
        caption:
          "A NGC 2865 É UMA GALÁXIA ELÍPTICA LOCALIZADA A 100 MILHÕES DE ANOS-LUZ DE DISTÂNCIA DA TERRA.",
        credit: "ESA/Hubble & NASA",
      },
      {
        src: "./assets/img_g1f5.svg",
        caption:
          "A GALÁXIA ANÃ NGC 1705 É PEQUENA E DE FORMATO IRREGULAR.",
        credit: "ESA/Hubble & NASA, R. Chandar",
      },
      {
        src: "./assets/img_g1f6.svg",
        caption:
          "DUAS GALÁXIAS SE ENCONTRAM: IC 2163, A MENOR, E A GALÁXIA MAIOR, NGC 2207.",
        credit: "NASA, ESA, CSA, STScI / Flickr",
      },
    ],
  },

  estrelas: {
    title: "ESTRELAS",
    images: [
      {
        src: "./assets/img_g2f1.svg",
        caption:
          "O SOL É A ESTRELA CENTRAL DO SISTEMA SOLAR.",
        credit: "NASA/Goddard/SDO",
      },
      {
        src: "./assets/img_g2f2.svg",
        caption:
          "PROTOESTRELA COM APENAS CERCA DE 100 MIL ANOS.",
        credit: "NASA, ESA, CSA, STScI / Flickr",
      },
    ],
  },

  sistemas: {
    title: "SISTEMAS PLANETÁRIOS",
    images: [
      {
        src: "./assets/img_g3f1.svg",
        caption:
          "ILUSTRAÇÃO COM PLANETAS MAIS PRÓXIMOS DO QUE NA REALIDADE.",
        credit: "NASA/JPL",
      },
    ],
  },

  planetas: {
    title: "PLANETAS",
    images: [
      {
        src: "./assets/img_g4f1.svg",
        caption:
          "IMAGEM DA TERRA PELO SATÉLITE GOES-8.",
        credit: "GOES-8 / NASA",
      },
    ],
  },

  satelites: {
    title: "SATÉLITES NATURAIS",
    images: [
      {
        src: "./assets/img_g5f1.svg",
        caption:
          "A LUA É O ÚNICO SATÉLITE NATURAL DA TERRA.",
        credit: "NASA",
      },
    ],
  },

  corpos: {
    title: "OUTROS CORPOS CELESTES",
    images: [
      {
        src: "./assets/img_g6f1.svg",
        caption:
          "COMETA ISON PASSANDO PELA CONSTELAÇÃO DE VIRGEM.",
        credit: "NASA Goddard",
      },
    ],
  },

  exploracao: {
    title: "OBSERVAÇÃO E EXPLORAÇÃO",
    images: [
      {
        src: "./assets/img_g7f1.svg",
        caption:
          "SONDA CHINESA CHANG'E 4 NO LADO OCULTO DA LUA.",
        credit: "CSNA",
      },
    ],
  },
};

/* =========================================================
   ESTADO DA GALERIA
   ========================================================= */

let currentTheme = null;
let currentIndex = 0;

/* =========================================================
   PRELOAD DE IMAGENS
   ========================================================= */

function preloadAdjacentImages(theme, index) {
  if (!galleryData[theme]) return;
  const images = galleryData[theme].images;
  if (images.length <= 1) return;

  if (images[index + 1]) new Image().src = images[index + 1].src;
  if (images[index - 1]) new Image().src = images[index - 1].src;
}

/* =========================================================
   ATUALIZA CONTEÚDO DO MODAL
   ========================================================= */

function updateGallery() {
  if (!currentTheme) return;

  const themeData = galleryData[currentTheme];
  const item = themeData.images[currentIndex];

  const mainImage = document.getElementById("main-image");
  const titleEl = document.getElementById("gallery-title");
  const descEl = document.querySelector(".gallery-description");
  const creditEl = document.querySelector(".gallery-credit");

  if (!mainImage || !titleEl || !descEl || !creditEl) return;

  mainImage.src = item.src;
  mainImage.setAttribute("width", "1000");
  mainImage.setAttribute("height", "1000");
  mainImage.alt = `${themeData.title} — ${item.caption}`;

  titleEl.textContent = themeData.title;
  descEl.textContent = item.caption;
  creditEl.textContent = item.credit || "";

  const leftArrow = document.querySelector(".nav-arrow.left");
  const rightArrow = document.querySelector(".nav-arrow.right");

  if (leftArrow && rightArrow) {
    leftArrow.style.display = currentIndex === 0 ? "none" : "flex";
    rightArrow.style.display =
      currentIndex === themeData.images.length - 1 ? "none" : "flex";
  }

  preloadAdjacentImages(currentTheme, currentIndex);
}

/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

function goToPrev() {
  if (!currentTheme) return;
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function goToNext() {
  if (!currentTheme) return;
  const total = galleryData[currentTheme].images.length;
  if (currentIndex < total - 1) {
    currentIndex++;
    updateGallery();
  }
}

/* =========================================================
   ABERTURA DA GALERIA
   ========================================================= */

document.querySelectorAll(".open-gallery").forEach((card) => {
  card.addEventListener("click", () => {
    const tema = card.dataset.tema;
    if (!galleryData[tema]) return;

    currentTheme = tema;
    currentIndex = 0;
    updateGallery();

    const modal = new bootstrap.Modal(
      document.getElementById("galleryModal")
    );
    modal.show();
  });
});

/* =========================================================
   EVENTOS (CLICK / TECLADO)
   ========================================================= */

document.body.addEventListener("click", (e) => {
  if (e.target.closest(".nav-arrow.left")) goToPrev();
  if (e.target.closest(".nav-arrow.right")) goToNext();
});

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("galleryModal");
  if (!modal || !modal.classList.contains("show")) return;

  if (e.key === "ArrowLeft") goToPrev();
  if (e.key === "ArrowRight") goToNext();
  if (e.key === "Escape") {
    bootstrap.Modal.getInstance(modal)?.hide();
  }
});

/* =========================================================
   FECHAR MODAL AO CLICAR FORA
   ========================================================= */

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("mousedown", (e) => {
    const dialog = modal.querySelector(".modal-dialog");
    if (dialog && !dialog.contains(e.target)) {
      bootstrap.Modal.getInstance(modal)?.hide();
    }
  });
});

/* =========================================================
   FULLSCREEN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const btnFullscreen = document.getElementById("btnFullscreen");
  if (!btnFullscreen) return;

  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.documentElement.classList.add("is-fullscreen");
    } else {
      document.exitFullscreen();
      document.documentElement.classList.remove("is-fullscreen");
    }
  });
});
