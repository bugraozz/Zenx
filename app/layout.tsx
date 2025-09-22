import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope, Lora } from "next/font/google"
import "./globals.css"

// Google fontlarını tanımla
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

// Metadata: title ve description
export const metadata: Metadata = {
  title: "ZENX GYM - Life Club | Premium Fitness Experience",
  description:
    "ZENX GYM Life Club - Modern spor salonu deneyimi. Premium ekipmanlar, uzman antrenörler ve motivasyonel ortam.",
  generator: "v0.app",
}

// RootLayout: tüm siteyi kapsar
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${geist.variable} ${manrope.variable} ${lora.variable} antialiased`}
    >
      <head>
        {/* Mobil uyumluluk */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Favicon veya diğer head etiketlerini buraya ekleyebilirsin */}
      </head>
      <body>{children}</body>
    </html>
  )
}
