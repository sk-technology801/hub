"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Droplets, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Clock, Wrench, Play, Pause, 
  RotateCcw, Activity, Thermometer, Sliders 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../../components/motion-wrapper";

export default function OilChangePage() {
  const [activePlan, setActivePlan] = useState(1);

  // Interactive Lubrication Chamber & Viscosity Stream Simulator
  const [oilGrade, setOilGrade] = useState("synthetic");
  const [oilTempF, setOilTempF] = useState(195);
  const [isFlowing, setIsFlowing] = useState(true);

  const oilSpecs = {
    conventional: {
      name: "Conventional 5W-30",
      filmStrength: "Moderate (3,000 Mile Interval)",
      breakdownTemp: 230,
      flowSpeed: 2.2,
      color: "#d97706"
    },
    blend: {
      name: "Synthetic Blend 5W-30",
      filmStrength: "High (5,000 Mile Interval)",
      breakdownTemp: 255,
      flowSpeed: 1.6,
      color: "#f59e0b"
    },
    synthetic: {
      name: "Euro Full Synthetic 0W-40 (Liqui Moly)",
      filmStrength: "Ultra High (10,000 Mile Interval)",
      breakdownTemp: 295,
      flowSpeed: 1.0,
      color: "#fbbf24"
    }
  };

  const currentSpec = oilSpecs[oilGrade];
  const isOverheating = oilTempF > currentSpec.breakdownTemp;

  const packages = [
    {
      title: "Conventional Quick Lube",
      price: "$49",
      time: "20-30 mins",
      desc: "Up to 5 quarts of quality conventional motor oil and standard spin-on filter.",
      features: [
        "Up to 5 qts conventional motor oil",
        "New standard spin-on oil filter",
        "Check & top off vital under-hood fluids",
        "Tire pressure inspection"
      ]
    },
    {
      title: "Full Synthetic Protection",
      price: "$79",
      time: "30-40 mins",
      desc: "Up to 6 quarts of full synthetic Mobil1/Castrol Edge with OEM filter and 50-point check.",
      features: [
        "Up to 6 qts Full Synthetic motor oil",
        "OEM-grade high-efficiency oil filter",
        "50-Point Digital Video Health Inspection",
        "Chassis lubrication & suspension check",
        "24-Month Warranty Coverage"
      ]
    },
    {
      title: "Euro Master Liqui Moly Track Spec",
      price: "$129",
      time: "45 mins",
      desc: "German Liqui Moly/Motul 300V racing synthetic with Ceratec anti-friction additive.",
      features: [
        "German Liqui Moly / Motul Synthetic",
        "Ceratec ceramic micro-wear protection",
        "Mann / Mahle OEM German filter",
        "Digital health inspection sent to phone",
        "Comprehensive engine diagnostics scan"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Hydrodynamic Film Protection</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Full Synthetic Oil & <br />
          <span className="gold-gradient-text">Engine Lubrication Service</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Shield your engine against friction wear, heat breakdown, and carbon sludge. We exclusively use OEM factory-certified lubricants and high-flow micro-glass filters.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=oil" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book Oil Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE LUBRICATION CHAMBER (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Droplets className="w-4 h-4" />
                <span>Engine Oil Hydrodynamic Viscosity Simulator</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Molecular Film Strength & Thermal Flow Bench
              </h2>
            </div>

            <div className="flex gap-1.5 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {[
                { id: "conventional", label: "Conventional" },
                { id: "blend", label: "Synthetic Blend" },
                { id: "synthetic", label: "Full Synthetic" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setOilGrade(tab.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition ${
                    oilGrade === tab.id
                      ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Lubrication Flow Box */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-4 flex flex-col justify-between overflow-hidden">
              
              {/* Particle Stream */}
              <div className="relative w-full h-44 flex items-center justify-around overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-2"
                    style={{
                      animation: isFlowing ? `float ${currentSpec.flowSpeed}s ease-in-out infinite` : 'none',
                      animationDelay: `${i * 0.15}s`
                    }}
                  >
                    <div 
                      className="w-3.5 h-3.5 rounded-full shadow-lg transition-colors duration-300"
                      style={{
                        backgroundColor: isOverheating ? '#ef4444' : currentSpec.color,
                        boxShadow: `0 0 10px ${isOverheating ? '#ef4444' : currentSpec.color}`
                      }}
                    />
                    <div 
                      className="w-1.5 h-12 rounded-full opacity-60 transition-colors duration-300"
                      style={{ backgroundColor: isOverheating ? '#ef4444' : currentSpec.color }}
                    />
                  </div>
                ))}
              </div>

              {/* Status Readout HUD */}
              <div className="relative z-10 flex justify-between items-center bg-gray-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-800 text-xs">
                <span className="text-gray-300 flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  Oil Temp: <strong className={isOverheating ? "text-red-400" : "text-amber-400"}>{oilTempF}°F</strong>
                </span>
                <span className="text-gray-300">
                  Hydrodynamic Status: <strong className={isOverheating ? "text-red-400" : "text-emerald-400"}>
                    {isOverheating ? "⚠️ Thermal Breakdown Risk" : "✅ 100% Film Integrity"}
                  </strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-gray-300 font-semibold">Simulated Engine Oil Temperature: {oilTempF}°F</span>
                  <span className="text-amber-400 font-bold">Max: {currentSpec.breakdownTemp}°F</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="310"
                  value={oilTempF}
                  onChange={(e) => setOilTempF(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Selected Grade:</span>
                  <strong className="text-amber-400">{currentSpec.name}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Film Shear Strength:</span>
                  <strong className="text-white">{currentSpec.filmStrength}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Thermal Resistance:</span>
                  <strong className="text-white">Up to {currentSpec.breakdownTemp}°F</strong>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsFlowing(!isFlowing)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isFlowing ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isFlowing ? "Pause Flow" : "Flow Oil Stream"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* Packages Grid (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <MotionStaggerItem
              key={idx}
              className={`glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between cursor-pointer border ${
                activePlan === idx ? "border-amber-400/60 shadow-2xl shadow-amber-500/15" : "border-gray-800"
              }`}
              onClick={() => setActivePlan(idx)}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">{pkg.price}</span>
                  <span className="text-xs text-gray-400">/ est. {pkg.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <ul className="space-y-2.5 border-t border-gray-800 pt-4">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs sm:text-sm text-gray-300 space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link
                  href={`/get-quote?service=${encodeURIComponent(pkg.title)}`}
                  className={`w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition ${
                    activePlan === idx ? "gold-glow-btn" : "bg-gray-800 hover:bg-amber-500 hover:text-black text-gray-200"
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}