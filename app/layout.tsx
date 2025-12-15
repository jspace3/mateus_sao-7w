import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Casa Geriátrica São Mateus - Salvando Vidas com Amor",
  description: "Cuidamos com amor",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            try {
              window.pixelId = "693b71530e758f77c60023d9";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              a.onerror = function() { console.log("[v0] Utmify pixel failed to load"); };
              document.head.appendChild(a);
            } catch(e) {
              console.log("[v0] Error loading Utmify pixel:", e);
            }
          `}
        </Script>

        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck="true"
          data-utmify-prevent-subids="true"
          strategy="afterInteractive"
        />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-175BZ8DWT0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            try {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-175BZ8DWT0');
            } catch(e) {
              console.log("[v0] Error initializing Google Analytics:", e);
            }
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
