import { Dumbbell, Users, Star, CheckCircle } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

export function ServicesSection() {
  const words = [
    { text: "ZENX", className: "text-white text-2xl sm:text-4xl 2xl:text-6xl font-[var(--font-manrope)]" },
    { text: "GYM", className: "text-white text-2xl sm:text-4xl 2xl:text-6xl font-[var(--font-manrope)]" },
    { text: "İLE", className: "text-white text-2xl sm:text-4xl 2xl:text-6xl font-[var(--font-manrope)]" },
    { text: "ÖZEL", className: "text-white text-2xl sm:text-4xl 2xl:text-6xl font-[var(--font-manrope)]" },
    { text: "ÇÖZÜMLER", className: "text-zinc-400 text-2xl sm:text-4xl 2xl:text-6xl font-[var(--font-manrope)]" },
  ];

  const items = [
    {
      image:

        "/zenx2.jpg",
      className: "top-[10%] right-[5%] rotate-[-5deg]",
    },
    {
      image:
        "/zenx3.jpg",
      className: "top-[25%] right-[15%] rotate-[3deg]",
    },
    {
      image:
        "/zenx4.jpg",
      className: "top-[40%] right-[10%] rotate-[-2deg]",
    },
    {
      image:
        "/zenx5.jpg",
      className: "top-[55%] right-[20%] rotate-[5deg]",
    },
  ];

  return (
    <section
      id="services"
      className="relative h-screen w-screen overflow-hidden bg-zinc-900 text-white"
    >
      {/* Sparkles arka plan */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          id="services-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFD700"
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
        {/* Typewriter at the top */}
        <div className="text-center pt-16 pb-8 z-10">
          <TypewriterEffectSmooth words={words} />
        </div>

        {/* Services content below */}
        <div className="flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] w-full">
          {/* Sol taraf - servis açıklamaları */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-[var(--font-manrope)] text-white">Kişisel Antrenman</h3>
                <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
                  Birebir antrenman seansları ile hedeflerinize hızla ulaşın.
                </p>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-[var(--font-manrope)]">Kişiselleştirilmiş program</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl  font-[var(--font-manrope)] text-white">Grup Dersleri</h3>
                <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
                  Yoga, Pilates, CrossFit ve daha fazlası için grup derslerimize katılın.
                </p>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-[var(--font-manrope)]">15+ farklı ders türü</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-[var(--font-manrope)] text-white">Beslenme Danışmanlığı</h3>
                <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
                  Uzman diyetisyenlerimizden kişisel beslenme planı alın.
                </p>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-[var(--font-manrope)]">Kişiye özel diyet planı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - görsel alan */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Arka plan efekti */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-700/20 to-zinc-800/30 rounded-3xl"></div>
          </div>
        </div>
        </div>
      </div>

      {/* Draggable kartlar - sağda hafif dağınık */}
      <DraggableCardContainer className="absolute inset-0 z-20 pointer-events-auto">
        {items.map((item, index) => (
          <DraggableCardBody
            key={index}
            className={`absolute ${item.className}`}
          >
            <img
              src={item.image}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}


