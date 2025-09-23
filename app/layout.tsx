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

export const metadata: Metadata = {
  title: "ZENX GYM - Life Club | Premium Fitness Experience",
  description:
    "ZENX GYM Life Club - Modern spor salonu deneyimi. Premium ekipmanlar, uzman antrenörler ve motivasyonel ortam.",
  keywords: ["spor salonu", "fitness", "gym", "personal training", "ZENX GYM"],
  generator: "v0.app",
  authors: [{ name: "ZENX Team", url: "https://www.zenxgym.com" }],
  openGraph: {
    title: "ZENX GYM - Life Club",
    description:
      "Modern spor salonu deneyimi. Premium ekipmanlar, uzman antrenörler ve motivasyonel ortam.",
    url: "https://www.zenxgym.com",
    siteName: "ZENX GYM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZENX GYM Life Club",
      },
    ],
    locale: "tr_TR",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${geist.variable} ${manrope.variable} ${lora.variable} antialiased`}
    >
      <head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/zicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
