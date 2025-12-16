/* =========================================================
   DADOS DAS GALERIAS (NÃO ALTERAR CONTEÚDO)
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
        caption: "A GALÁXIA ANÃ NGC 1705 É PEQUENA E DE FORMATO IRREGULAR.",
        credit: "ESA/Hubble & NASA, R. Chandar",
      },
      {
        src: "./assets/img_g1f6.svg",
        caption:
          "DUAS GALÁXIAS SE ENCONTRAM: IC 2163, A MENOR, E A GALÁXIA MAIOR, NGC 2207. ESSA IMAGEM FOI GERADA COM DADOS DO TELESCÓPIO ESPACIAL JAMES WEBB E DO TELESCÓPIO ESPACIAL HUBBLE.",
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
          "O SOL É A ESTRELA CENTRAL DO SISTEMA SOLAR. ESTA IMAGEM MOSTRA A LUZ BRILHANTE DE UMA ERUPÇÃO SOLAR.",
        credit: "NASA/Goddard/SDO",
      },
      {
        src: "./assets/img_g2f2.svg",
        caption:
          "A IMAGEM MOSTRA UMA FUTURA ESTRELA: UMA PROTOESTRELA. COM APENAS CERCA DE 100 MIL ANOS, ESTE JOVEM OBJETO ESTÁ EM MEIO A UMA NUVEM DE GÁS E POEIRA EM FORMA DE AMPULHETA.",
        credit: "NASA, ESA, CSA, STScI / Flickr",
      },
      {
        src: "./assets/img_g2f3.svg",
        caption:
          "PRÓXIMA CENTAURI É A ESTRELA MAIS PRÓXIMA DO SOL, A POUCO MAIS DE 4 ANOS-LUZ DE DISTÂNCIA.",
        credit: "ESA/Hubble & NASA",
      },
    ],
  },

  sistemas: {
    title: "SISTEMAS PLANETÁRIOS",
    images: [
      {
        src: "./assets/img_g3f1.svg",
        caption:
          "NESTA ILUSTRAÇÃO, OS PLANETAS SÃO RETRATADOS MUITO MAIS PRÓXIMOS DO QUE REALMENTE ESTÃO.",
        credit: "NASA/JPL",
      },
      {
        src: "./assets/img_g3f2.svg",
        caption:
          "CONCEITO ARTÍSTICO DO SISTEMA KEPLER-90. UM SISTEMA COM UMA ESTRELA SEMELHANTE AO SOL.",
        credit: "NASA/Ames Research Center",
      },
    ],
  },

  planetas: {
    title: "PLANETAS",
    images: [
      {
        src: "./assets/img_g4f1.svg",
        caption:
          "IMAGEM DA TERRA, TERCEIRO PLANETA EM DISTÂNCIA DO SOL.",
        credit: "GOES-8 / NASA",
      },
      {
        src: "./assets/img_g4f2.svg",
        caption:
          "IMAGEM DE MERCÚRIO, O PLANETA MAIS PRÓXIMO DO SOL.",
        credit: "NASA/JHUAPL",
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
          "IMAGEM DO COMETA ISON PASSANDO PELA CONSTELAÇÃO DE VIRGEM.",
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
          "EM 2019, A SONDA CHINESA CHANG'E 4 FOI A PRIMEIRA A POUSAR NO LADO OCULTO DA LUA.",
        credit: "CSNA",
      },
    ],
  },
};

/* =========================================================
   CONTROLE DE ESTADO
========================================================= */

let currentTheme = null;
let currentIndex = 0;

/* =========================================================
   ATUALIZA GALERIA
========================================================= */

function updateGallery() {
  if (!currentTheme) return;

  const themeData = galleryData[currentTheme];
  const item = themeData.images[currentIndex];
  const total = themeData.images.length;

  const img = document.getElementById("galleryImage");
  const title = document.getElementById("galleryTitle");
  const caption = document.getElementById("galleryCaption");
  const credit = document.getElementById("galleryCredit");

  img.src = item.src;
  img.alt = `${themeData.title} — ${item.caption}`;

  title.textContent = themeData.title;
  caption.textContent = item.caption;
  credit.textContent = item.credit || "";

  const left = document.querySelector(".nav-arrow.left");
  const right = document.querySelector(".nav-arrow.right");

  if (total <= 1) {
    left.style.display = "none";
    right.style.display = "none";
  } else {
    left.style.display = currentIndex === 0 ? "none" : "flex";
    right.style.display = currentIndex === total - 1 ? "none" : "flex";
  }
}

/* =========================================================
   NAVEGAÇÃO
========================================================= */

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function goNext() {
  const total = galleryData[currentTheme].images.length;
  if (currentIndex < total - 1) {
    currentIndex++;
    updateGallery();
  }
}

/* =========================================================
   ABERTURA DO MODAL
========================================================= */

document.querySelectorAll(".open-gallery").forEach(card => {
  card.addEventListener("click", () => {
    const theme = card.dataset.tema;
    if (!galleryData[theme]) return;

    currentTheme = theme;
    currentIndex = 0;
    updateGallery();

    const modalEl = document.getElementById("galleryModal");
    let modal = bootstrap.Modal.getInstance(modalEl);
    if (!modal) modal = new bootstrap.Modal(modalEl);
    modal.show();
  });
});

/* =========================================================
   EVENTOS
========================================================= */

document.addEventListener("click", e => {
  if (e.target.closest(".nav-arrow.left")) goPrev();
  if (e.target.closest(".nav-arrow.right")) goNext();
});

document.addEventListener("keydown", e => {
  const modal = document.getElementById("galleryModal");
  if (!modal.classList.contains("show")) return;

  if (e.key === "ArrowLeft") goPrev();
  if (e.key === "ArrowRight") goNext();
  if (e.key === "Escape") {
    bootstrap.Modal.getInstance(modal)?.hide();
  }
});

/* =========================================================
   FULLSCREEN (SEM ALTERAR LAYOUT)
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnFullscreen");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
});
