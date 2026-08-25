"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Wind, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Clock, Wrench, Play, Pause, 
  Thermometer, Snowflake, Activity, Zap 
} from "lucide-react";

export default function ACRepairServicePage() {
  const [activePlan, setActivePlan] = useState(1);

  // Interactive AC Refrigerant & Climate Simulator States
  const [targetTempF, setTargetTempF] = useState(36);
  const [fanSpeed, setFanSpeed] = useState(4);
  const [refrigerantType, setRefrigerantType] = useState("R134a");
  const [isCompressorOn, setIsCompressorOn] = useState(true);

  const isSubZeroIce = isCompressorOn && targetTempF < 40;
  const highSidePsi = isCompressorOn ? (180 + (85 - targetTempF) * 2.2).toFixed(0) : "45";
  const lowSidePsi = isCompressorOn ? (28 + (targetTempF - 35) * 0.4).toFixed(0) : "45";
  const airConditioningState = !isCompressorOn ? "Vent Blowing (Compressor Off)" : targetTempF < 40 ? "Freezing Sub-Zero Ice ❄️" : "Comfort Cooling";

  const packages = [
    {
      title: "AC Performance Test & Diagnostic",
      price: "$49",
      time: "30 mins",
      desc: "Digital vent temperature measurement, manifold gauge pressure test, and belt check.",
      features: [
        "Vent temperature differential measurement",
        "High & low pressure line gauge readings",
        "AC compressor clutch & relay test",
        "Cabin pollen air filter inspection"
      ]
    },
    {
      title: "Full Evac, UV Leak Test & Recharge",
      price: "$119",
      time: "1 hour",
      desc: "Complete vacuum evacuation, UV leak dye injection, and pure factory R134a/R1234yf refrigerant recharge.",
      features: [
        "Complete moisture & old gas evacuation",
        "PAG synthetic compressor oil top-off",
        "UV fluorescing leak detection check",
        "Factory-specified pure refrigerant recharge",
        "24-Month Warranty Protection"
      ]
    },
    {
      title: "Complete Climate System Overhaul",
      price: "$499+",
      time: "2-4 hours",
      desc: "New OEM AC compressor, receiver drier, condenser coil flush, and cabin antimicrobial ozone sanitization.",
      features: [
        "Brand new OEM AC compressor & clutch",
        "New receiver drier / accumulator installation",
        "Evaporator & condenser coil ultrasonic flush",
        "Cabin antimicrobial duct ozone treatment",
        "Ice-cold vent temperature guarantee"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Ice-Cold Cabin Climate Guarantee</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Climate Control & <br />
          <span className="gold-gradient-text">Auto AC Repair Service</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Stay cool and comfortable all year. We provide EPA-certified refrigerant recharges (R134a & modern R1234yf), precision leak detection, and compressor repairs.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=ac" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book AC Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </section>

      {/* INTERACTIVE SUB-ZERO AC SIMULATOR WITH ICE CRYSTALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-cyan-500/30 shadow-2xl relative">
          
          {/* Top border glowing frost effect */}
          {isSubZeroIce && (
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.4)] pointer-events-none animate-pulse" />
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Snowflake className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Dual-Zone Refrigerant Loop Simulation</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Compressor Cycle & Sub-Zero Vent Temperature
              </h2>
            </div>

            <div className="flex gap-2 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {["R134a", "R1234yf"].map((gas) => (
                <button
                  key={gas}
                  onClick={() => setRefrigerantType(gas)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition ${
                    refrigerantType === gas
                      ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {gas} Spec
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Evaporator & Cooling Flow Box with Frost FX */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-4 flex flex-col justify-between overflow-hidden">
              
              {/* Cold Air Particle Flow Stream */}
              <div className="relative w-full h-44 flex items-center justify-around overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-3"
                    style={{
                      animation: isCompressorOn ? `float ${Math.max(0.8, 3.2 - fanSpeed * 0.6)}s ease-in-out infinite` : 'none',
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    <Snowflake className={`w-5 h-5 ${isSubZeroIce ? "text-cyan-300 animate-spin" : isCompressorOn ? "text-cyan-400" : "text-gray-600"}`} style={{ animationDuration: '6s' }} />
                    <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 via-cyan-200 to-transparent rounded-full opacity-70" />
                  </div>
                ))}
              </div>

              {/* Real-time Vent Temperature Display */}
              <div className="relative z-10 flex justify-between items-center bg-gray-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-800 text-xs">
                <span className="text-gray-300 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-cyan-400" />
                  Vent Temp: <strong className="text-cyan-400 text-sm font-black">{isCompressorOn ? `${targetTempF}°F` : "78°F"}</strong>
                </span>
                <span className="text-gray-300">
                  High: <strong className="text-amber-400">{highSidePsi} PSI</strong> | Low: <strong className="text-cyan-400">{lowSidePsi} PSI</strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">Thermostat Target Temperature: {targetTempF}°F</span>
                  <span className="text-cyan-400 font-bold">{airConditioningState}</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="70"
                  value={targetTempF}
                  onChange={(e) => setTargetTempF(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Blower Fan Speed Level
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((speed) => (
                    <button
                      key={speed}
                      onClick={() => setFanSpeed(speed)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                        fanSpeed === speed
                          ? "bg-cyan-500 text-black border-cyan-400 font-black shadow-md shadow-cyan-500/25"
                          : "bg-gray-950 border-gray-800 text-gray-300 hover:border-gray-700"
                      }`}
                    >
                      Speed {speed}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => setIsCompressorOn(!isCompressorOn)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                    isCompressorOn ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20" : "bg-gray-800 text-gray-300"
                  }`}
                >
                  <Snowflake className="w-3.5 h-3.5" />
                  <span>{isCompressorOn ? "A/C Compressor: ON" : "A/C Compressor: OFF"}</span>
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