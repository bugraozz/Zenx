import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope, Lora } from "next/font/google"
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
  title: "ZENX GYM - Sivas Spor Salonu | Premium Fitness Experience",
  description: "Sivas’taki modern spor salonu ZENX GYM Life Club. Premium ekipmanlar, uzman antrenörler ve motivasyonel ortam.",
  keywords: ["Sivas spor salonu", "spor salonu", "fitness", "gym", "personal training", "Sivas fitness"],
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
        alt: "Sivas Spor Salonu ZENX GYM Life Club",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
