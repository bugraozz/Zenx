"use client";
import React from "react";

interface BackgroundTextProps {
  text: string;
  size?: string; 
  color?: string; 
  opacity?: number; 
  className?: string; 
}

export function BackgroundText({
  text,
  size = "text-[20rem]",
  color = "white",
  opacity = 10,
  className = "",
}: BackgroundTextProps) {
  return (
    <div
      className={`absolute inset-0 flex justify-center items-center pointer-events-none select-none ${className}`}
    >
      <h1
        className={`${size} font-bold uppercase text-transparent`}
        style={{
          WebkitTextStroke: `2px ${color}`,
          opacity: opacity / 100,
        }}
      >
        {text}
      </h1>
    </div>
  );
}
