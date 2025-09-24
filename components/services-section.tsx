"use client"
import { useRef, useState } from "react"
import { BackgroundText } from "./BackgroundText"


export function ServicesSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

 
  return (
    <section
      id="services"
      className="relative h-screen w-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center "
    >
       <BackgroundText text="LIFE" size="text-[50rem]" className="top-0/4" />
       <BackgroundText text="CLUB" size="text-[50rem]" className="top-2/4"  />

      {/* Başlık */}
      <div className="text-center pt-4 pb-18 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)] mb-6">
          ZENX GYM İLE ÖZEL ÇÖZÜMLER
        </h1>
      </div>

      {/* Video Card */}
      <div className="relative z-10 w-full max-w-6xl px-2">
        {/* Metalik Border */}
        <div className="relative rounded-2xl p-[2px] overflow-hidden">
          {/* Dönen border efekti */}
          <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,white,gray,white)]" />

          {/* İç kısım (video) */}
          <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/gym_video.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full h-[500px] object-cover"
            />           
          </div>
        </div>
      </div>
    </section>
  )
}
