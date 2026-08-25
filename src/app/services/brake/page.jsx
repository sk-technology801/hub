"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, Wrench, CheckCircle2, Sparkles, 
  ArrowRight, Phone, AlertTriangle, Disc, Play, 
  Pause, RotateCcw, Activity, Thermometer, Gauge, Flame 
} from "lucide-react";

export default function BrakeServicePage() {
  const [activePlan, setActivePlan] = useState(1);

  // Interactive Brake Rotor & Clamping Simulator States
  const [rotorSpeedRpm, setRotorSpeedRpm] = useState(2400);
  const [brakePressurePercent, setBrakePressurePercent] = useState(65);
  const [isRotating, setIsRotating] = useState(true);
  const [padMaterial, setPadMaterial] = useState("ceramic");

  const rotorTempC = Math.round(80 + (brakePressurePercent / 100) * 580);
  const stoppingDistanceFt = Math.max(105, Math.round(180 - (brakePressurePercent / 100) * 60 + (padMaterial === "worn" ? 55 : padMaterial === "metallic" ? 15 : 0)));
  const isHighFriction = brakePressurePercent > 40;

  const packages = [
    {
      title: "Complete Brake Safety Inspection",
      price: "$49",
      time: "30 mins",
      desc: "Digital laser micrometer measurement of pad thickness, rotor runout, and boiling point test.",
      features: [
        "Digital caliper pad thickness check",
        "Rotor surface warpage & heat check",
        "Brake fluid moisture content analysis",
        "Hydraulic line & hose inspection"
      ]
    },
    {
      title: "Ceramic Brake Pad & Rotor Service",
      price: "$149",
      time: "1-2 hours",
      desc: "Ultra-quiet, dust-free ceramic pad install, rotor resurfacing, and hardware replacement.",
      features: [
        "Premium ceramic low-dust pads",
        "Precision rotor resurfacing / truing",
        "New stainless steel guide clips & springs",
        "Caliper slide pin synthetic lubrication",
        "24-Month / 24,000-Mile Warranty"
      ]
    },
    {
      title: "Complete 4-Wheel Overhaul & Flush",
      price: "$349",
      time: "2-3 hours",
      desc: "Brand-new anti-corrosion coated rotors, front & rear ceramic pads, and DOT4 pressure bleed.",
      features: [
        "4x Coated anti-rust vented rotors",
        "Front & rear high-performance ceramic pads",
        "Full pressurized hydraulic fluid flush",
        "Electronic parking brake (EPB) recalibration",
        "Road test bed-in & stopping distance certification"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Maximum Stopping Power & Safety</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Precision Ceramic <br />
          <span className="gold-gradient-text">Brake Service & Rotors</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Ensure zero squealing, vibration-free stopping, and rapid pedal response with our master ceramic brake pad and precision rotor packages.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=brake" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book Brake Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </section>

      {/* INTERACTIVE ROTOR WITH FLYING SPARKS & HEAT DISTORTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Disc className="w-4 h-4" />
                <span>Brembo Thermal Rig with Live Sparks</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Cross-Drilled Rotor Friction & Heat Glow Bench
              </h2>
            </div>

            <div className="flex gap-2 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {[
                { id: "ceramic", label: "Ceramic Low-Dust" },
                { id: "metallic", label: "Semi-Metallic" },
                { id: "worn", label: "Worn Pad" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPadMaterial(tab.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition ${
                    padMaterial === tab.id
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
            
            {/* Visual Spinning Rotor & Flying Friction Sparks */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Friction Sparks Flying Effect */}
              {isHighFriction && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-[0_0_8px_#f59e0b]"
                      style={{
                        top: `${30 + Math.random() * 40}%`,
                        left: `${25 + Math.random() * 50}%`,
                        animation: `laserSweep ${0.4 + Math.random() * 0.4}s ease-out infinite`,
                        animationDelay: `${i * 0.08}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Spinning Disc */}
              <div 
                className="relative w-48 h-48 rounded-full border-8 border-gray-600 shadow-2xl flex items-center justify-center transition-all"
                style={{
                  boxShadow: isHighFriction ? `0 0 ${brakePressurePercent * 0.5}px rgba(239, 68, 68, 0.8)` : 'none',
                  animation: isRotating 
                    ? `spin ${Math.max(0.2, 3 - (rotorSpeedRpm / 3000) * 2.5)}s linear infinite` 
                    : 'none'
                }}
              >
                {/* Thermal Color Surface */}
                <div 
                  className="w-36 h-36 rounded-full border-4 border-gray-500 relative flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: brakePressurePercent > 60 ? '#7f1d1d' : brakePressurePercent > 30 ? '#451a03' : '#374151'
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full bg-gray-900 shadow-inner"
                      style={{
                        top: `${50 + 32 * Math.sin((i * Math.PI) / 4)}%`,
                        left: `${50 + 32 * Math.cos((i * Math.PI) / 4)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-amber-400 z-10 flex items-center justify-center font-black text-[10px] text-amber-400">
                    60 MPH
                  </div>
                </div>
              </div>

              {/* Dynamic Clamping Caliper */}
              <div 
                className={`absolute top-6 left-12 z-20 px-3 py-1.5 rounded-xl border font-black text-xs transition-all duration-300 shadow-xl ${
                  brakePressurePercent > 50
                    ? "bg-red-600 border-red-400 text-white scale-110 shadow-red-500/50 animate-pulse"
                    : "bg-amber-500 border-amber-400 text-black"
                }`}
              >
                {brakePressurePercent > 0 ? `CLAMPED (${brakePressurePercent}%)` : "BREMBO CALIPER"}
              </div>

              {/* Live Overlay HUD */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center bg-gray-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs">
                <span className="text-gray-300 flex items-center gap-1">
                  <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                  Rotor Temp: <strong className={rotorTempC > 400 ? "text-red-400" : "text-amber-400"}>{rotorTempC}°C</strong>
                </span>
                <span className="text-gray-300 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  60-0 Stopping Dist: <strong className="text-white">{stoppingDistanceFt} ft</strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-gray-300 font-semibold flex items-center gap-1">
                    <Disc className="w-3.5 h-3.5 text-amber-400" />
                    Hydraulic Brake Pedal Pressure: {brakePressurePercent}%
                  </span>
                  <span className="text-amber-400 font-bold">{rotorTempC}°C</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brakePressurePercent}
                  onChange={(e) => setBrakePressurePercent(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Pad Friction Coefficient (μ):</span>
                  <strong className="text-amber-400">{padMaterial === "ceramic" ? "0.45 (Optimal Bite)" : padMaterial === "metallic" ? "0.38" : "0.21 (Critical)"}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Brake Dust Generation:</span>
                  <strong className="text-white">{padMaterial === "ceramic" ? "Ultra-Low / Clean" : "High Brake Dust"}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Thermal Fade Resistance:</span>
                  <strong className="text-white">{padMaterial === "ceramic" ? "Up to 650°C Zero Fade" : "Moderate"}</strong>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isRotating ? "Pause Rotor" : "Spin Rotor"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
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
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}