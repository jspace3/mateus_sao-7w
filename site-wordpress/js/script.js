// Função para adicionar UTMs aos links
function addUtmsToUrl(baseUrl) {
  const urlParams = new URLSearchParams(window.location.search)
  const url = new URL(baseUrl)

  // Adicionar todos os parâmetros UTM
  ;["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((param) => {
    const value = urlParams.get(param)
    if (value) {
      url.searchParams.set(param, value)
    }
  })

  return url.toString()
}

// Aplicar UTMs a todos os links de doação
document.addEventListener("DOMContentLoaded", () => {
  const donationLinks = document.querySelectorAll(".donation-card, .modal-btn")
  donationLinks.forEach((link) => {
    const originalHref = link.getAttribute("href")
    if (originalHref && originalHref.includes("pay.saomateus.online")) {
      link.setAttribute("href", addUtmsToUrl(originalHref))
    }
  })
})

// Contadores animados
const statNumbers = document.querySelectorAll(".stat-number")
let hasAnimated = false

const observerStats = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true

        statNumbers.forEach((stat) => {
          const target = Number.parseInt(stat.dataset.target)
          const isPlus = stat.textContent.includes("+")
          let current = 0
          const increment = target === 42 ? 1 : 2
          const interval = target === 42 ? 30 : 20

          const counter = setInterval(() => {
            current += increment
            if (current >= target) {
              stat.textContent = isPlus ? `+${target}` : target
              clearInterval(counter)
            } else {
              stat.textContent = isPlus ? `+${current}` : current
            }
          }, interval)
        })
      }
    })
  },
  { threshold: 0.3 },
)

statNumbers.forEach((stat) => observerStats.observe(stat))

// Carousel Trabalhos
const trabalhos = [
  {
    titulo: "Tarde de Pastel",
    descricao: "No dia 09/08/2025 fizemos a nossa tarde de pastel para nossos moradores.",
    imagem: "images/tarde do pastel.jpg",
  },
  {
    titulo: "Momento de Convivência",
    descricao: "Nossos idosos aproveitando um momento especial de interação e carinho.",
    imagem: "images/convivencia.jpg",
  },
  {
    titulo: "Dia da Beleza",
    descricao: "Voluntários dedicados cuidando da autoestima dos nossos moradores.",
    imagem: "images/dia da beleza.jpg",
  },
  {
    titulo: "Carnaval no Asilo",
    descricao: "Festa de carnaval com muita alegria e diversão para todos os moradores.",
    imagem: "images/carnaval.jpg",
  },
]

let currentTrabalhoIndex = 0

function updateTrabalho() {
  const trabalho = trabalhos[currentTrabalhoIndex]
  document.getElementById("trabalhoImagem").src = trabalho.imagem
  document.getElementById("trabalhoTitulo").textContent = trabalho.titulo
  document.getElementById("trabalhoDescricao").textContent = trabalho.descricao

  // Update dots
  const dotsContainer = document.getElementById("trabalhoDots")
  dotsContainer.innerHTML = ""
  trabalhos.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.className = "carousel-dot" + (index === currentTrabalhoIndex ? " active" : "")
    dot.onclick = () => {
      currentTrabalhoIndex = index
      updateTrabalho()
    }
    dotsContainer.appendChild(dot)
  })
}

function nextTrabalho() {
  currentTrabalhoIndex = (currentTrabalhoIndex + 1) % trabalhos.length
  updateTrabalho()
}

function prevTrabalho() {
  currentTrabalhoIndex = (currentTrabalhoIndex - 1 + trabalhos.length) % trabalhos.length
  updateTrabalho()
}

// Auto-play trabalhos
setInterval(nextTrabalho, 4000)

// Carousel Depoimentos
const depoimentos = [
  {
    nome: "Ana Paula Medeiros",
    foto: "images/d1.jpg",
    texto:
      "Essa casa, apesar de simples, tem muito amor. As pessoas que trabalham fazem por amor, pois os recursos são escassos. Quem puder ajudar, pode ter certeza que estará fazendo uma grande caridade.",
  },
  {
    nome: "Carla Santos",
    foto: "images/d2.jpg",
    texto:
      "Conheci o asilo através de uma amiga e me apaixonei pelo trabalho que fazem. Os idosos são muito bem cuidados e tratados com muito carinho. Recomendo a todos que possam ajudar!",
  },
  {
    nome: "Maria Helena",
    foto: "images/d3.jpg",
    texto:
      "Minha mãe foi muito bem acolhida nesta casa. A equipe é dedicada e amorosa. Fico muito feliz em saber que ela está em boas mãos. Gratidão eterna a todos!",
  },
  {
    nome: "Fernanda Lima",
    foto: "images/d4.jpg",
    texto:
      "Participei de uma ação voluntária no asilo e fiquei encantada com a dedicação de todos. Os idosos são tratados como família. Vale a pena conhecer e ajudar!",
  },
  {
    nome: "Juliana Costa",
    foto: "images/d5.jpg",
    texto:
      "Um lugar abençoado que cuida dos nossos idosos com muito amor e respeito. Faço doações mensais e sei que estão sendo bem utilizadas. Ajudem também!",
  },
]

let currentDepoimentoIndex = 0

function updateDepoimento() {
  const depoimento = depoimentos[currentDepoimentoIndex]
  document.getElementById("depoimentoFoto").src = depoimento.foto
  document.getElementById("depoimentoNome").textContent = depoimento.nome
  document.getElementById("depoimentoTexto").textContent = `"${depoimento.texto}"`

  // Update dots
  const dotsContainer = document.getElementById("depoimentoDots")
  dotsContainer.innerHTML = ""
  depoimentos.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.className = "carousel-dot-small" + (index === currentDepoimentoIndex ? " active" : "")
    dot.onclick = () => {
      currentDepoimentoIndex = index
      updateDepoimento()
    }
    dotsContainer.appendChild(dot)
  })
}

function nextDepoimento() {
  currentDepoimentoIndex = (currentDepoimentoIndex + 1) % depoimentos.length
  updateDepoimento()
}

function prevDepoimento() {
  currentDepoimentoIndex = (currentDepoimentoIndex - 1 + depoimentos.length) % depoimentos.length
  updateDepoimento()
}

// Auto-play depoimentos
setInterval(nextDepoimento, 5000)

// Modal
function openModal() {
  const modal = document.getElementById("donationModal")
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("donationModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Close modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Initialize carousels
updateTrabalho()
updateDepoimento()
