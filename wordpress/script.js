// Adicionar UTMs aos links de doação automaticamente
document.addEventListener("DOMContentLoaded", () => {
  // Pegar os parâmetros UTM da URL atual
  const urlParams = new URLSearchParams(window.location.search)
  const utmParams = {}
  ;["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((param) => {
    if (urlParams.has(param)) {
      utmParams[param] = urlParams.get(param)
    }
  })

  // Se houver UTMs, adicionar a todos os links de doação
  if (Object.keys(utmParams).length > 0) {
    const donationLinks = document.querySelectorAll(".donation-card")

    donationLinks.forEach((link) => {
      const url = new URL(link.href)
      Object.keys(utmParams).forEach((key) => {
        url.searchParams.set(key, utmParams[key])
      })
      link.href = url.toString()
    })
  }

  // Animação suave ao scroll
  const cards = document.querySelectorAll(".stat-card, .impacto-card, .donation-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "0"
          entry.target.style.transform = "translateY(20px)"

          setTimeout(() => {
            entry.target.style.transition = "all 0.6s ease"
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, 100)
        }
      })
    },
    { threshold: 0.1 },
  )

  cards.forEach((card) => observer.observe(card))
})
