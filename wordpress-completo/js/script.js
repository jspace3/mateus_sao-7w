// Função para adicionar UTMs aos links
function addUTMs(url) {
  try {
    const utms = JSON.parse(sessionStorage.getItem("utms") || "{}")
    const urlObj = new URL(url)

    Object.keys(utms).forEach((key) => {
      if (utms[key]) {
        urlObj.searchParams.set(key, utms[key])
      }
    })

    return urlObj.toString()
  } catch (e) {
    return url
  }
}

// Modal
function openModal() {
  const modal = document.getElementById("donation-modal")
  modal.classList.add("show")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.getElementById("donation-modal")
  modal.classList.remove("show")
  document.body.style.overflow = ""
}

// Fechar modal ao clicar fora
window.onclick = (event) => {
  const modal = document.getElementById("donation-modal")
  if (event.target === modal) {
    closeModal()
  }
}

// Fechar modal com ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// Animação dos números das estatísticas
function animateStats() {
  const stats = document.querySelectorAll(".stat-number")

  stats.forEach((stat) => {
    const target = Number.parseInt(stat.getAttribute("data-target"))
    let current = 0
    const increment = target > 50 ? 2 : 1
    const duration = 30

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      stat.textContent = current > 99 ? `+${current}` : current
    }, duration)
  })
}

// Observer para animar quando visível
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("estatisticas-section")) {
          animateStats()
          observer.unobserve(entry.target)
        }
        if (entry.target.classList.contains("impacto-item")) {
          entry.target.classList.add("visible")
        }
      }
    })
  },
  { threshold: 0.2 },
)

// Observar seções
document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".estatisticas-section")
  if (statsSection) observer.observe(statsSection)

  const impactoItems = document.querySelectorAll(".impacto-item")
  impactoItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`
    observer.observe(item)
  })
})

// Carousel Trabalhos
const trabalhos = [
  {
    imagem: "images/9.jpeg",
    titulo: "Tarde de Pastel",
    descricao: "No dia 09/08/2025 fizemos a nossa tarde de pastel para nossos moradores.",
  },
  {
    imagem: "images/14.jpeg",
    titulo: "Momento de Convivência",
    descricao: "Nossos idosos aproveitando um momento especial de interação e carinho.",
  },
  {
    imagem: "images/10.jpeg",
    titulo: "Dia da Beleza",
    descricao: "Voluntários dedicados cuidando da autoestima dos nossos moradores.",
  },
  {
    imagem: "images/11.jpeg",
    titulo: "Carnaval no Asilo",
    descricao: "Festa de carnaval com muita alegria e diversão para todos os moradores.",
  },
]

let currentSlide = 0

function updateCarousel() {
  const trabalho = trabalhos[currentSlide]
  document.getElementById("carousel-image").src = trabalho.imagem
  document.getElementById("carousel-title").textContent = trabalho.titulo
  document.getElementById("carousel-description").textContent = trabalho.descricao
  updateDots("carousel-dots", currentSlide, trabalhos.length)
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % trabalhos.length
  updateCarousel()
}

function previousSlide() {
  currentSlide = (currentSlide - 1 + trabalhos.length) % trabalhos.length
  updateCarousel()
}

// Auto-play carousel
setInterval(nextSlide, 4000)

// Carousel Depoimentos
const depoimentos = [
  {
    nome: "Ana Paula Medeiros",
    foto: "images/depoimentos/2.jpeg",
    texto:
      "Essa casa, apesar de simples, tem muito amor. As pessoas que trabalham fazem por amor, pois os recursos são escassos. Quem puder ajudar, pode ter certeza que estará fazendo uma grande caridade.",
  },
  {
    nome: "Carla Santos",
    foto: "images/depoimentos/4.jpeg",
    texto:
      "Conheci o asilo através de uma amiga e me apaixonei pelo trabalho que fazem. Os idosos são muito bem cuidados e tratados com muito carinho. Recomendo a todos que possam ajudar!",
  },
  {
    nome: "Maria Helena",
    foto: "images/depoimentos/3.jpeg",
    texto:
      "Minha mãe foi muito bem acolhida nesta casa. A equipe é dedicada e amorosa. Fico muito feliz em saber que ela está em boas mãos. Gratidão eterna a todos!",
  },
  {
    nome: "Fernanda Lima",
    foto: "images/depoimentos/5.jpeg",
    texto:
      "Participei de uma ação voluntária no asilo e fiquei encantada com a dedicação de todos. Os idosos são tratados como família. Vale a pena conhecer e ajudar!",
  },
  {
    nome: "Juliana Costa",
    foto: "images/depoimentos/6.jpeg",
    texto:
      "Um lugar abençoado que cuida dos nossos idosos com muito amor e respeito. Faço doações mensais e sei que estão sendo bem utilizadas. Ajudem também!",
  },
]

let currentDepoimento = 0

function updateDepoimento() {
  const depoimento = depoimentos[currentDepoimento]
  document.getElementById("depoimento-foto").src = depoimento.foto
  document.getElementById("depoimento-nome").textContent = depoimento.nome
  document.getElementById("depoimento-texto").textContent = `"${depoimento.texto}"`
  updateDots("depoimento-dots", currentDepoimento, depoimentos.length, true)
}

function nextDepoimento() {
  currentDepoimento = (currentDepoimento + 1) % depoimentos.length
  updateDepoimento()
}

function previousDepoimento() {
  currentDepoimento = (currentDepoimento - 1 + depoimentos.length) % depoimentos.length
  updateDepoimento()
}

// Auto-play depoimentos
setInterval(nextDepoimento, 5000)

// Função auxiliar para dots
function updateDots(containerId, current, total, isSmall = false) {
  const container = document.getElementById(containerId)
  container.innerHTML = ""

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div")
    dot.className = isSmall ? "dot dot-small" : "dot"
    if (i === current) dot.classList.add("active")
    dot.onclick = () => {
      if (containerId === "carousel-dots") {
        currentSlide = i
        updateCarousel()
      } else {
        currentDepoimento = i
        updateDepoimento()
      }
    }
    container.appendChild(dot)
  }
}

// Inicializar carousels
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel()
  updateDepoimento()

  // Adicionar UTMs aos links de doação no modal
  const donationLinks = document.querySelectorAll(".donation-card")
  donationLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const url = this.getAttribute("href")
      const urlWithUTMs = addUTMs(url)
      window.open(urlWithUTMs, "_blank")
    })
  })
})
