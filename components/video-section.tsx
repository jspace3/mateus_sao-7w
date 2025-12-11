"use client"

import { useEffect } from "react"

export function VideoSection() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://scripts.converteai.net/8880dc00-a13b-4e20-b7a3-41b1c53bf7b4/players/693b330646583018b52e8e68/v4/player.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: `<vturb-smartplayer id="vid-693b330646583018b52e8e68" style="display: block; width: 100%;"></vturb-smartplayer>`,
          }}
        />
      </div>
    </section>
  )
}
