// "use client";

// import { motion } from "motion/react";
// import React from "react";
// import { AuroraBackground } from "./ui/aurora-background";

// export function HeroSection() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//         <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
//           ZENX GYM | LIFE CLUB
//         </div>
//         <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
//           And this, is chemical burn.
//         </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }



"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Görsel ile başlık */}
        <div className="relative w-[400px] h-[200px] md:w-[600px] md:h-[200px]">
          <Image
            src="/logo.png"
            alt="ZENX GYM | LIFE CLUB"
            fill
            className="object-contain"
          />
        </div>

        {/* Alt başlık */}
        <div className="font-extralight text-base md:text-4xl  text-black py-4 text-center">
          ENERJİNİN VE GÜCÜNÜN KAYNAĞI
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
