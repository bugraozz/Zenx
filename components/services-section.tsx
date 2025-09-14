



import { Dumbbell, Users, Star, CheckCircle } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SparklesCore } from "./ui/sparkles";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Cover } from "./ui/cover";

export function ServicesSection() {
  const words = [
    { text: "ZENX" },
    { text: "GYM" },
    { text: "İLE" },
    { text: "ÖZEL" },
    { text: "ÇÖZÜMLER", className: "text-gray-900/70 dark:text-gray-900/70" },
  ];

  const items = [
    {
      title: "Tyler Durden",
      image:
      
        "/zenx2.jpg",
      className: "top-[10%] right-[5%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "/zenx3.jpg",
      className: "top-[25%] right-[15%] rotate-[3deg]",
    },
    {
      title: "Iceland",
      image:
        "/zenx4.jpg",
      className: "top-[40%] right-[10%] rotate-[-2deg]",
    },
    {
      title: "Japan",
      image:
        "/zenx5.jpg",
      className: "top-[55%] right-[20%] rotate-[5deg]",
    },
  ];

  return (
    <section
      id="services"
      className="relative h-screen w-screen overflow-hidden bg-zinc-10 text-black flex items-center justify-center"
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
          particleColor="#FFFFFF"
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-6 mb-12 h-[10rem] z-10">
            <TypewriterEffectSmooth words={words} />  
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - servis açıklamaları */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="h-8 w-8 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold font-sans">Kişisel Antrenman</h3>
                <p className="text-muted-foreground font-sans-serif text-lg leading-relaxed">
                  Birebir antrenman seansları ile hedeflerinize hızla ulaşın.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm  font-sans-serif">Kişiselleştirilmiş program</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold font-sans">Grup Dersleri</h3>
                <p className="text-muted-foreground font-sans-serif text-lg leading-relaxed">
                  Yoga, Pilates, CrossFit ve daha fazlası için grup derslerimize katılın.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-sans-serif">15+ farklı ders türü</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-16 h-16 bg-zinc-10 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold font-sans">Beslenme Danışmanlığı</h3>
                <p className="text-muted-foreground font-sans-serif text-lg leading-relaxed">
                  Uzman diyetisyenlerimizden kişisel beslenme planı alın.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-sans-serif">Kişiye özel diyet planı</span>
                </div>
              </div>
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
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}


