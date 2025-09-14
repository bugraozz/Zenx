"use client";
import React from "react";
import { motion } from "motion/react";

export default function LampEffect() {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-slate-950 rounded-md">
      {/* Sol taraf ışık */}
      <motion.div
        initial={{ opacity: 0.5, width: "10rem" }}
        whileInView={{ opacity: 1, width: "20rem" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute right-1/2 h-40 w-[20rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
      />

      {/* Sağ taraf ışık */}
      <motion.div
        initial={{ opacity: 0.5, width: "10rem" }}
        whileInView={{ opacity: 1, width: "20rem" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute left-1/2 h-40 w-[20rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
      />

      {/* Ortadaki glow */}
      <div className="absolute z-10 h-20 w-[16rem] rounded-full bg-cyan-400 opacity-40 blur-2xl -translate-y-6"></div>
    </div>
  );
}
