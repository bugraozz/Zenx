"use client";


import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WobbleCard } from "./ui/wobble-card";

const description = `Zenx Gym, modern ekipmanlar, uzman antrenörler ve motive edici bir topluluk ile fitness hedeflerinize ulaşmanızı sağlar.`;

export function AboutSection() {
 

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* İçerik */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6 mb-16 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-[var(--font-lora)]">
            NEDEN ZENX GYM?
          </h1>
          <div className="text-white">
            <TextGenerateEffect description={description} className="text-white" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Modern Ekipmanlar
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              En güncel fitness ekipmanları ile etkili ve güvenli antrenmanlar yapın.
            </p>
            <img
              src="/zenx1.jpg"
              width={300}
              height={300}
              alt="Modern gym equipment"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Uzman Antrenörler
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              Deneyimli eğitmenlerle kişiselleştirilmiş programlar ve rehberlik.
            </p>
            <img
              src="/zenx4.jpg"
              width={300}
              height={200}
              alt="Expert trainers"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Topluluk Desteği
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              Motivasyon dolu bir ortamda hedeflerinize ulaşın ve yeni arkadaşlar edinin.
            </p>
            <img
              src="/zenx12.jpg"
              width={300}
              height={200}
              alt="Community support"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}