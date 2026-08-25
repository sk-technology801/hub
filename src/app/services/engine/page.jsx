"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Cpu, Flame, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Clock, Wrench, Play, Pause, 
  RotateCcw, Activity, Gauge, Zap, AlertTriangle 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../../components/motion-wrapper";

export default function EngineServicePage() {
  const [activePlan, setActivePlan] = useState(1);

  // 4-Cylinder Firing Order & Turbo Boost Simulation
  const [simRpm, setSimRpm] = useState(4200);
  const [isEngineRunning, setIsEngineRunning] = useState(true);
  const [activeCylinder, setActiveCylinder] = useState(1);
  const firingOrder = [1, 3, 4, 2];

  useEffect(() => {
    if (!isEngineRunning) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % 4;
      setActiveCylinder(firingOrder[idx]);
    }, Math.max(120, 800 - (simRpm / 7500) * 650));
    return () => clearInterval(interval);
  }, [isEngineRunning, simRpm]);

  const boostBar = isEngineRunning ? ((simRpm / 7500) * 1.8).toFixed(2) : "0.00";
  const estHp = isEngineRunning ? Math.round(180 + (simRpm / 7500) * 280) : 0;
  const cylinderTemp = isEngineRunning ? Math.round(450 + (simRpm / 7500) * 380) : 70;

  const packages = [
    {
      title: "Engine Performance Diagnostic & Smoke Test",
      price: "$89",
      time: "45 mins",
      desc: "Comprehensive vacuum smoke test for intake leaks, compression testing, and direct fuel rail pressure.",
      features: [
        "EVAP & intake vacuum smoke leak check",
        "Cylinder compression & leak-down test",
        "High-pressure direct fuel pump scan",
        "Spark plug & ignition coil oscilloscope test"
      ]
    },
    {
      title: "Direct-Injection Walnut Blast & Carbon Clean",
      price: "$289",
      time: "2-3 hours",
      desc: "Ultrasonic walnut shell media blast cleaning for intake valves, restoring up to 35 lost horsepower.",
      features: [
        "Intake manifold removal & visual inspection",
        "High-pressure walnut media valve blast",
        "New OEM intake manifold gasket kit",
        "Throttle body electronic realignment",
        "Dyno-verified horsepower restoration"
      ]
    },
    {
      title: "Timing Belt, Water Pump & Camshaft Service",
      price: "$599+",
      time: "3-5 hours",
      desc: "OEM timing belt/chain replacement, hydraulic tensioners, water pump, and camshaft phaser alignment.",
      features: [
        "Heavy-duty Continental/Gates timing belt kit",
        "New cast-impeller water pump & coolant flush",
        "Variable valve timing (VVT) solenoid clean",
        "24-Month / 24,000-Mile Complete Warranty"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Maximum Horsepower & Engine Longevity</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          High-Performance Engine <br />
          <span className="gold-gradient-text">Diagnostics & Overhauls</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          From direct-injection carbon walnut blasting to full cylinder head rebuilds and turbocharger calibrations, our master engineers restore peak factory power.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=engine" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book Engine Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE 4-CYLINDER FIRING ORDER BENCH (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>4-Cylinder Firing Order Bench (1-3-4-2)</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Spark Combustion & Turbo Boost Simulation
              </h2>
            </div>
            
            <div className="px-3 py-1 bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20 text-xs font-bold font-mono">
              ⚡ Firing: Cylinder #{activeCylinder}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Engine Block & Cylinders */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-5 flex flex-col justify-between overflow-hidden">
              
              <div className="grid grid-cols-4 gap-3 h-44 items-center">
                {[1, 2, 3, 4].map((cyl) => {
                  const isFiring = activeCylinder === cyl && isEngineRunning;
                  return (
                    <div
                      key={cyl}
                      className={`h-full rounded-2xl border-2 flex flex-col items-center justify-between p-2 relative overflow-hidden transition-all duration-150 ${
                        isFiring 
                          ? "border-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/40 scale-105" 
                          : "border-gray-800 bg-gray-950/80"
                      }`}
                    >
                      {/* Spark Flame Burst */}
                      {isFiring && (
                        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-amber-500 to-red-600 opacity-70 animate-ping rounded-2xl" />
                      )}

                      <div className="relative z-10 text-[11px] font-black text-gray-300">
                        CYL #{cyl}
                      </div>

                      {/* Moving Piston graphic */}
                      <div 
                        className={`relative z-10 w-full h-8 rounded-lg border flex items-center justify-center text-[9px] font-black transition-all duration-150 ${
                          isFiring ? "bg-amber-400 text-black border-amber-300" : "bg-gray-800 text-gray-400 border-gray-700"
                        }`}
                      >
                        {isFiring ? "POWER" : "COMP"}
                      </div>

                      <div className="relative z-10 text-[10px] font-mono text-gray-400">
                        {isFiring ? "🔥 SPARK" : "WAIT"}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* HUD Readout */}
              <div className="relative z-10 flex justify-between items-center bg-gray-950/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-gray-800 text-xs">
                <span className="text-gray-300 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  Throttle: <strong className="text-white">{simRpm} RPM</strong>
                </span>
                <span className="text-gray-300 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Turbo Boost: <strong className="text-amber-400">{boostBar} BAR</strong>
                </span>
                <span className="text-gray-300 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Calculated: <strong className="text-emerald-400">{estHp} BHP</strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">Engine Dyno Throttle: {simRpm} RPM</span>
                  <span className="text-amber-400 font-bold">{estHp} BHP</span>
                </div>
                <input
                  type="range"
                  min="900"
                  max="7500"
                  step="100"
                  value={simRpm}
                  onChange={(e) => setSimRpm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Exhaust Gas Temp (EGT):</span>
                  <strong className="text-amber-400">{cylinderTemp}°C</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Twin-Scroll Turbo Spool:</span>
                  <strong className="text-white">{boostBar} BAR Direct Manifold</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Combustion Efficiency:</span>
                  <strong className="text-emerald-400">99.2% Lambda Verified</strong>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsEngineRunning(!isEngineRunning)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isEngineRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isEngineRunning ? "Pause Firing" : "Run Firing Cycle"}</span>
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