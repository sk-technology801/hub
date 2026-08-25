"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sparkles, Gauge, Zap } from "lucide-react";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [isIgniting, setIsIgniting] = useState(true);

  useEffect(() => {
    setIsIgniting(true);
    const timer = setTimeout(() => {
      setIsIgniting(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div key={pathname} className="relative min-h-screen">
      
      {/* 1. TOP LASER BEAM & RPM TACHOMETER IGNITION SWEEP */}
      <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
        <div 
          className={`h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 shadow-[0_0_15px_#f59e0b] transition-all duration-700 ease-out ${
            isIgniting ? "w-full opacity-100" : "w-0 opacity-0"
          }`} 
        />
      </div>

      {/* 2. AMBIENT VEHICLE IGNITION FLARE (Subtle background sweep on load) */}
      <div 
        className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-700 ${
          isIgniting ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-amber-500/15 via-yellow-400/25 to-amber-500/15 rounded-full blur-[140px] animate-pulse" />
      </div>

      {/* 3. SMOOTH PAGE CONTENT REVEAL WITH HARDWARE ACCELERATION */}
      <div className="animate-page-entrance">
        {children}
      </div>

    </div>
  );
}
