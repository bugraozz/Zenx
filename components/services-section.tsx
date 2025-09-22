// import { Dumbbell, Users, Star, CheckCircle } from "lucide-react";
// import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import { SparklesCore } from "./ui/sparkles";
// import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";
// import DomeGallery from './DomeGallery';

// export function ServicesSection() {
  

//   const items = [
//     {
//       image:

//         "/zenx2.jpg",
//       className: "top-[10%] right-[5%] rotate-[-5deg]",
//     },
//     {
//       image:
//         "/zenx3.jpg",
//       className: "top-[25%] right-[15%] rotate-[3deg]",
//     },
//     {
//       image:
//         "/zenx4.jpg",
//       className: "top-[40%] right-[10%] rotate-[-2deg]",
//     },
//     {
//       image:
//         "/zenx5.jpg",
//       className: "top-[55%] right-[20%] rotate-[5deg]",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="relative h-screen w-screen overflow-hidden bg-black text-white"
//     >
      
      

//       {/* İçerik */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col">
//         {/* Typewriter at the top */}
//         <div className="text-center pt-16 pb-8 z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)]">
//             ZENX GYM İLE ÖZEL ÇÖZÜMLER
//           </h1>
//         </div>

//         {/* Services content below */}
//         <div className="flex-1 flex items-center">
//           <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] w-full">
//           {/* Sol taraf - servis açıklamaları */}
//           <div className="space-y-8">
//             <div className="flex items-start space-x-6 group">
//               <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Dumbbell className="h-8 w-8 text-white" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-extralight text-white">Kişisel Antrenman</h3>
//                 <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
//                   Birebir antrenman seansları ile hedeflerinize hızla ulaşın.
//                 </p>
//                 <div className="flex items-center space-x-2 text-zinc-400">
//                   <CheckCircle className="h-4 w-4" />
//                   <span className="text-sm font-[var(--font-manrope)]">Kişiselleştirilmiş program</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-start space-x-6 group">
//               <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Users className="h-8 w-8 text-white" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl  font-extralight text-white">Grup Dersleri</h3>
//                 <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
//                   Yoga, Pilates, CrossFit ve daha fazlası için grup derslerimize katılın.
//                 </p>
//                 <div className="flex items-center space-x-2 text-zinc-400">
//                   <CheckCircle className="h-4 w-4" />
//                   <span className="text-sm font-[var(--font-manrope)]">15+ farklı ders türü</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-start space-x-6 group">
//               <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                 <Star className="h-8 w-8 text-white" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-2xl font-extralight text-white">Beslenme Danışmanlığı</h3>
//                 <p className="text-gray-300 font-[var(--font-manrope)] text-lg leading-relaxed">
//                   Uzman diyetisyenlerimizden kişisel beslenme planı alın.
//                 </p>
//                 <div className="flex items-center space-x-2 text-zinc-400">
//                   <CheckCircle className="h-4 w-4" />
//                   <span className="text-sm font-[var(--font-manrope)]">Kişiye özel diyet planı</span>
//                 </div>
//               </div>
//             </div>
//           </div>

        
//         </div>
//         </div>
//       </div>

      
//       <DraggableCardContainer className="absolute inset-0 z-20 pointer-events-auto">
//         {items.map((item, index) => (
//           <DraggableCardBody
//             key={index}
//             className={`absolute ${item.className}`}
//           >
//             <img
//               src={item.image}
//               className="pointer-events-none relative z-10 h-80 w-80 object-cover"
//             />
//           </DraggableCardBody>
//         ))}
//       </DraggableCardContainer>
//     </section>
//   );
// }



"use client"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function ServicesSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section
      id="services"
      className="relative h-screen w-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center"
    >
      {/* Başlık */}
      <div className="text-center pt-16 pb-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-lora)] mb-6">
          ZENX GYM İLE ÖZEL ÇÖZÜMLER
        </h1>
      </div>

      {/* Video Card */}
      <div className="relative z-10 w-full max-w-3xl px-4">
        {/* Metalik Border */}
        <div className="relative rounded-2xl p-[3px] overflow-hidden">
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
