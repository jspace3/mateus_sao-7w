export function addUtmsToUrl(url: string): string {
  if (typeof window === "undefined") return url

  try {
    const urlObj = new URL(url)
    const currentParams = new URLSearchParams(window.location.search)

    // Lista de parâmetros UTM comuns
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid",
      "msclkid",
    ]

    // Adiciona os UTMs da URL atual para a URL de destino
    utmParams.forEach((param) => {
      const value = currentParams.get(param)
      if (value) {
        urlObj.searchParams.set(param, value)
      }
    })

    // Se existir utmify_params no localStorage, adiciona também
    if (typeof localStorage !== "undefined") {
      const utmifyParams = localStorage.getItem("utmify_params")
      if (utmifyParams) {
        try {
          const params = JSON.parse(utmifyParams)
          Object.keys(params).forEach((key) => {
            if (!urlObj.searchParams.has(key)) {
              urlObj.searchParams.set(key, params[key])
            }
          })
        } catch (e) {
          // Ignora erros de parsing
        }
      }
    }

    return urlObj.toString()
  } catch (e) {
    // Se houver erro ao processar a URL, retorna a original
    return url
  }
}
