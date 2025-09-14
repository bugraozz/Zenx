"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({ text, duration }: { text: string; duration?: number }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // SVG içindeki yüzdelik koordinat
  const getMaskPosition = () => {
    if (!svgRef.current) return { cx: "50%", cy: "50%" };
    const rect = svgRef.current.getBoundingClientRect();
    const cx = ((cursor.x - rect.left) / rect.width) * 100;
    const cy = ((cursor.y - rect.top) / rect.height) * 100;
    return { cx: `${cx}%`, cy: `${cy}%` };
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Gradient */}
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        {/* Hover mask */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={getMaskPosition()}
          transition={{ type: "spring", stiffness: 300, damping: 50, duration: duration ?? 0 }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Arka stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.2"
        className="fill-transparent stroke-neutral-100 font-[helvetica] text-lg font-extralight dark:stroke-neutral-900"
        style={{ opacity: hovered ? 0.3 : 0 }}
      >
        {text}
      </text>

      {/* Animasyonlu stroke */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.2"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-lg font-extralight dark:stroke-neutral-900"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Gradient ve mask uygulanmış text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.2"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-lg font-extralight"
      >
        {text}
      </text>
    </svg>
  );
};
