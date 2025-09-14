// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Dumbbell, Users, Clock } from "lucide-react"
// import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import { WobbleCard } from "./ui/wobble-card";

// const description = `Modern fitness anlayışı ile geleneksel değerleri harmanlayarak, her seviyeden sporcuya uygun ortam sunuyoruz.`;

// export function AboutSection() {
//   const words = [
//     {
//       text: "NEDEN",
//     },
//     {
//       text: "ZENX",
//     },
//     {
//       text: "GYM?",
//       className: "text-yellow-500 dark:text-yellow-500",
//     },
//   ];
//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-muted/40 relative z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-6 mb-16">
//           <TypewriterEffectSmooth words={words} />
//           <TextGenerateEffect description={description} />
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900">
//         <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           No shirt, no shoes, no weapons.
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//           If someone yells “stop!”, goes limp, or taps out, the fight is over.
//         </p>
//         <img
//           src="/zenx1.jpg"
//           width={300}
//           height={200}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
//         />
//       </WobbleCard>

//           <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900">
//         <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           No shirt, no shoes, no weapons.
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//           If someone yells “stop!”, goes limp, or taps out, the fight is over.
//         </p>
//         <img
//           src="/zenx4.jpg"
//           width={300}
//           height={200}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
//         />
//       </WobbleCard>

//           <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900">
//         <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           No shirt, no shoes, no weapons.
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//           If someone yells “stop!”, goes limp, or taps out, the fight is over.
//         </p>
//         <img
//           src="/zenx12.jpg"
//           width={300}
//           height={200}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
//         />
//       </WobbleCard>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, Clock } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { WobbleCard } from "./ui/wobble-card";


const description = `Modern fitness anlayışı ile geleneksel değerleri harmanlayarak, her seviyeden sporcuya uygun ortam sunuyoruz.`;

export function AboutSection() {
  const words = [
    { text: "NEDEN" },
    { text: "ZENX" },
    {
      text: "GYM?",
      className: "text-gray-900/70 dark:text-gray-900/70",
    },
  ];

  return (
    <section
      id="about"
      className="relative h-screen overflow-hidden bg-zinc-10 text-white"
    >

      
      
     

      {/* İçerik */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center space-y-6 mb-16">
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect description={description} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
            <img
              src="/zenx1.jpg"
              width={300}
              height={200}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
            <img
              src="/zenx4.jpg"
              width={300}
              height={200}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[550px] bg-gray-900/70">
            <h2 className="max-w-80 text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              No shirt, no shoes, no weapons.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
            <img
              src="/zenx12.jpg"
              width={300}
              height={200}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-50 object-contain rounded-xl"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
