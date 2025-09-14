

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

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
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Galeri</h1>

      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/80 backdrop-primary-md border border-border/50 shadow-lg hover:bg-primary/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
          Ana Sayfa
        </Link>
      </div>

      {/* Draggable Card Grid */}
      <DraggableCardContainer className="relative my-10 flex min-h-screen w-full justify-center overflow-clip">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center justify-center gap-10 md:grid-cols-3">
          {images.map((src, idx) => (
            <Container key={idx} onClick={() => setSelectedIndex(idx)}>
              <DraggableCardBody>
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={400}
                  height={300}
                  className="pointer-events-none relative z-10 h-80 w-full object-cover  "
                />
                <p className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  Image {idx + 1}
                </p>
              </DraggableCardBody>
            </Container>
          ))}
        </div>
      </DraggableCardContainer>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-red-600 hover:text-red-800 transition-colors duration-300"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          <button className="absolute left-6 text-white hover:text-gray-600 transition-colors duration-300" onClick={handlePrev}>
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

          <button className="absolute right-6 text-white hover:text-gray-600 transition-colors duration-300" onClick={handleNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}

// Container component tıklanabilir ve TypeScript uyumlu
const Container = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-lg bg-gray-200 dark:bg-neutral-800 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
