"use client";
import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function SkHubLogo({ size = "md", showSubtitle = true, href = "/" }) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  const emblemSizeClass = isLarge 
    ? "w-12 h-12" 
    : isSmall 
    ? "w-8 h-8" 
    : "w-10 h-10";

  const titleSizeClass = isLarge 
    ? "text-2xl sm:text-3xl" 
    : isSmall 
    ? "text-lg" 
    : "text-xl sm:text-2xl";

  const subtitleSizeClass = isLarge 
    ? "text-[11px]" 
    : "text-[10px]";

  return (
    <Link href={href} className="inline-flex items-center space-x-3 group select-none">
      
      {/* Dynamic Geometric SK Shield Emblem */}
      <div className="relative">
        
        {/* Ambient Halo Glow */}
        <div className="absolute inset-0 rounded-2xl bg-amber-500 opacity-25 blur-md group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

        {/* Shield Container */}
        <div className={`${emblemSizeClass} rounded-xl bg-gradient-to-tr from-gray-950 via-gray-900 to-black border-2 border-amber-400/80 shadow-xl shadow-amber-500/20 flex items-center justify-center relative overflow-hidden group-hover:border-amber-300 group-hover:scale-105 transition-all duration-300`}>
          
          {/* Inner metallic reflection beam */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-400/15 to-transparent pointer-events-none opacity-60" />

          {/* SVG Vector SK Monogram */}
          <svg viewBox="0 0 40 40" className="w-full h-full p-1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Speed wing lines */}
            <path d="M 6 12 L 18 12 L 14 18 L 6 18 Z" fill="#f59e0b" opacity="0.9" />
            <path d="M 8 20 L 22 20 L 18 26 L 8 26 Z" fill="#fbbf24" />
            <path d="M 10 28 L 26 28 L 22 34 L 10 34 Z" fill="#f59e0b" opacity="0.9" />
            
            {/* Dynamic 'SK' Sharp Stencil Cut */}
            <text 
              x="22" 
              y="27" 
              fill="#ffffff" 
              fontSize="16" 
              fontWeight="900" 
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="-0.5"
            >
              SK
            </text>
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`${titleSizeClass} font-black tracking-wider text-white font-sans flex items-center leading-none`}>
          <span>SK</span>
          <span className="gold-gradient-text ml-1.5 font-extrabold">HUB</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-1 mt-auto mb-1 animate-pulse" />
        </div>

        {showSubtitle && (
          <span className={`${subtitleSizeClass} uppercase tracking-[0.2em] text-gray-400 font-bold -mt-0.5 group-hover:text-amber-400 transition-colors`}>
            Auto Performance & Care
          </span>
        )}
      </div>

    </Link>
  );
}
