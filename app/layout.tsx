import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import { Lora } from "next/font/google"
import "./globals.css"

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


export const metadata: Metadata = {
  title: "ZENX GYM - Life Club | Premium Fitness Experience",
  description:
    "ZENX GYM Life Club - Modern spor salonu deneyimi. Premium ekipmanlar, uzman antrenörler ve motivasyonel ortam.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${geist.variable} ${manrope.variable} ${lora.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
