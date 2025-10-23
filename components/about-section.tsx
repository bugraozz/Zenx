"use client";


import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WobbleCard } from "./ui/wobble-card";
import { BackgroundText } from "./BackgroundText";

const description = `Zenx Gym, yalnızca bir spor salonu değil; hedeflerinize ulaşmanız için tasarlanmış bir yaşam merkezidir. Son teknoloji ekipmanlarımız, alanında uzman antrenörlerimiz ve sizi motive eden topluluk atmosferimizle her antrenmanı daha etkili, her adımı daha keyifli hale getiriyoruz. Burada spor, bir zorunluluk değil; hayatınıza enerji, güç ve disiplin katan bir yolculuk haline gelir.`;

export function AboutSection() {
 

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white scroll-mt-40 "
    >
      <BackgroundText text="GYM" size="text-[65rem]"  />
      {/* İçerik */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10 mb-8">
        <div className="text-center space-y-6 mb-26 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-[var(--font-lora)]">
            NEDEN ZENX GYM?
          </h1>
          <div className="text-white">
            <TextGenerateEffect description={description} className="text-white" />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <WobbleCard containerClassName="col-span-1 min-h-[570px] bg-gray-900/70 flex flex-col justify-start">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Modern Ekipmanlar
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              En güncel fitness ekipmanları ile etkili ve güvenli antrenmanlar yapın.
            </p>
            <img
              src="/zenx1.jpg"
              width={500}
              height={500}
              alt="Modern gym equipment"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[570px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Uzman Antrenörler
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              Deneyimli eğitmenlerle kişiselleştirilmiş programlar ve rehberlik.
            </p>
            <img
              src="/zenx4.jpg"
              width={500}
              height={500}
              alt="Sivas Spor Salonu ZENX GYM Expert trainers"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl  tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Topluluk Desteği
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              Motivasyon dolu bir ortamda hedeflerinize ulaşın ve yeni arkadaşlar edinin.
            </p>
            <img
              src="/zenx12.jpg"
              width={500}
              height={500}
              alt="Sivas Spor Salonu ZENX GYM Community support"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl  tracking-[-0.015em] text-white font-[var(--font-manrope)]">
              Premium Tesis Hizmetleri
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 font-[var(--font-manrope)]">
              "Hedefinize uygun, kişisel antrenman programları.
            </p>
            <img
              src="/zenx7.jpg"
              width={500}
              height={500}
              alt="Sivas Spor Salaonu ZENX GYM Community support"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
