"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

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
  "zenx12.jpg"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev as number) + 1
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Galeri</h1>
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-primary-md border border-border/50 shadow-lg hover:bg-primary/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
         
        </Link>
      </div>

      {/* Grid Görseller */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white hover:text-red-400"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white hover:text-primary"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={images[selectedIndex]}
              alt="Selected image"
              width={700}
              height={400}
              className="object-contain rounded-xl shadow-xl"
            />
          </div>

          <button
            className="absolute right-6 text-white hover:text-primary"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}