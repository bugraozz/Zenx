

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundText } from "@/components/BackgroundText"
import { ChevronLeft, ChevronRight, X, ArrowLeft, Camera, Grid3X3 } from "lucide-react";

const images = [
  "zenx1.jpg",
  "zenx2.jpg",
  "zenx3.jpg",
  "zenx4.jpg",
  "zenx5.jpg",
  "zenx6.jpg",
  "zenx7.jpg",
  "zenx8.jpg",
  "zenx9.jpg",
  "zenx10.jpg",
  "zenx11.jpg",
  "zenx12.jpg",
  "zenx13.jpg",
  "zenx14.jpg",
  "zenx15.jpg",
  "zenx16.jpg",
  "zenx17.jpg",
  "zenx18.jpg",
  "zenx19.jpg",
  "zenx20.jpg"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : (prev as number) + 1));
  };

  
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  return (
    
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundText text="LIFE" size="text-[60rem]" className="top-0/4 right-0/4" />
      <BackgroundText text="CLUB" size="text-[50rem]" className="top-1/4 right-0/4" />

      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Header Section */}
        <div className="pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="w-20 h-20 text-white mr-3" />
            </div>
          </div>
        </div>

        
        <div className="absolute top-6 left-6 z-50">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 shadow-lg hover:bg-zinc-700/70 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
            <span className="text-white font-[var(--font-manrope)]">Ana Sayfa</span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onClick={() => setSelectedIndex(idx)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={`/${src}`}
                      alt={`Sivas Spor Salonu ZENX GYM Gallery ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay Content */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Grid3X3 className="w-4 h-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute top-6 right-6 w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-all duration-300 hover:scale-110 z-60 pointer-events-auto"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-all duration-300 hover:scale-110 z-60 pointer-events-auto"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-all duration-300 hover:scale-110 z-60 pointer-events-auto"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image */}
            <div className="relative w-full flex items-center justify-center">
             <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
  <Image
    src={`/${images[selectedIndex]}`}
    alt={`Sivas Spor Salonu ZENX GYM Gallery ${selectedIndex + 1}`}
    fill
    className="object-contain rounded-xl shadow-2xl"
  />
</div>


            </div>
          </div>
        )}
      </div>
    </div>
  );
}
