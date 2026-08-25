"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Settings, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Clock, Wrench, Play, Pause, 
  RotateCcw, Activity, Gauge, Zap 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../../components/motion-wrapper";

export default function TransmissionServicePage() {
  const [activePlan, setActivePlan] = useState(1);

  // Interactive Planetary Gear & Dual-Clutch Gearbox Simulator
  const [selectedGear, setSelectedGear] = useState("D3");
  const [inputRpm, setInputRpm] = useState(3200);
  const [isRotating, setIsRotating] = useState(true);

  const gearRatios = {
    P: { ratio: 0.0, name: "Park (Locked Mechanical Pawl)", torqueTransfer: 0 },
    R: { ratio: -3.4, name: "Reverse (Planetary Carrier Reverse)", torqueTransfer: 95 },
    N: { ratio: 0.0, name: "Neutral (Clutches Disengaged)", torqueTransfer: 0 },
    D1: { ratio: 4.7, name: "1st Gear (High Torque Multiplication)", torqueTransfer: 100 },
    D2: { ratio: 3.1, name: "2nd Gear (Clutch Pack 2 Engagement)", torqueTransfer: 98 },
    D3: { ratio: 2.1, name: "3rd Gear (Intermediate Ratio)", torqueTransfer: 99 },
    D4: { ratio: 1.5, name: "4th Gear (Direct Cruising)", torqueTransfer: 99 },
    D5: { ratio: 1.0, name: "5th Gear (Direct 1:1 Drive)", torqueTransfer: 100 },
    D6: { ratio: 0.7, name: "6th Gear (Overdrive Fuel Saver)", torqueTransfer: 97 },
  };

  const currentGear = gearRatios[selectedGear];
  const outputRpm = currentGear.ratio !== 0 ? Math.round(inputRpm / Math.abs(currentGear.ratio)) : 0;

  const packages = [
    {
      title: "Transmission Fluid Exchange & Filter",
      price: "$189",
      time: "1-2 hours",
      desc: "Full 100% synthetic automatic or dual-clutch transmission fluid exchange and OEM pan filter.",
      features: [
        "100% Complete fluid exchange via flush machine",
        "New OEM transmission pan filter & magnetic clean",
        "New pan gasket & torque to factory spec",
        "Computerized shift adaptation relearn"
      ]
    },
    {
      title: "Mechatronic Diagnostic & Solenoid Service",
      price: "$349",
      time: "2-3 hours",
      desc: "Deep electronic valve body diagnostic, shift solenoid testing, and adaptation pressure test.",
      features: [
        "Bidirectional solenoid valve pressure test",
        "Mechatronic connector seal replacement",
        "Torque converter lockup clutch scan",
        "24-Month Warranty Protection"
      ]
    },
    {
      title: "Complete Master Rebuild & Dyno Test",
      price: "$1,499+",
      time: "2-4 days",
      desc: "Complete teardown, new friction clutch packs, steel plates, planetary gears, and rebuilt torque converter.",
      features: [
        "Full internal friction & steel clutch pack rebuild",
        "New planetary gear sets & bearing overhaul",
        "Remanufactured torque converter",
        "Dyno spin testing & 24-Mo / 24,000-Mi Warranty"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Smooth Shifts & Torque Multiplication</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Transmission Repair & <br />
          <span className="gold-gradient-text">Drivetrain Engineering</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          From preventative dual-clutch transmission flushes to full planetary gear overhauls and electronic valve body programming, we deliver lightning-fast, seamless gear changes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=transmission" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book Transmission Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE PLANETARY GEARBOX SIMULATOR (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Settings className="w-4 h-4" />
                <span>Dual-Clutch / Planetary Gear Train Simulator</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Interlocking Gear Ratio & Torque Transfer
              </h2>
            </div>

            {/* Gear Selector Buttons */}
            <div className="flex flex-wrap gap-1 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {["P", "R", "N", "D1", "D2", "D3", "D4", "D5", "D6"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGear(g)}
                  className={`px-2.5 py-1 rounded-xl font-bold transition ${
                    selectedGear === g
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Rotating Gear Matrix */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-4 flex items-center justify-center overflow-hidden">
              
              <div className="relative flex items-center justify-center">
                {/* Sun Gear (Center) */}
                <div 
                  className="w-20 h-20 rounded-full border-4 border-amber-400 bg-gray-900 flex items-center justify-center z-20 shadow-xl"
                  style={{
                    animation: isRotating && currentGear.ratio !== 0 ? `spin ${Math.max(0.2, 2.5 - (inputRpm / 6000) * 2)}s linear infinite` : 'none'
                  }}
                >
                  <Settings className="w-10 h-10 text-amber-400" />
                </div>

                {/* Planetary Gears (Orbiting) */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-14 h-14 rounded-full border-2 border-gray-400 bg-gray-800 flex items-center justify-center shadow-lg"
                    style={{
                      transform: `rotate(${i * 120}deg) translate(65px) rotate(-${i * 120}deg)`,
                      animation: isRotating && currentGear.ratio !== 0 ? `spin ${Math.max(0.3, 3 - (outputRpm / 4000) * 2.5)}s linear infinite reverse` : 'none'
                    }}
                  >
                    <Settings className="w-6 h-6 text-gray-300" />
                  </div>
                ))}

                {/* Ring Gear (Outer) */}
                <div 
                  className="absolute w-56 h-56 rounded-full border-4 border-dashed border-gray-700 pointer-events-none"
                  style={{
                    animation: isRotating && currentGear.ratio !== 0 ? `spin ${Math.max(0.5, 4 - (outputRpm / 4000) * 3)}s linear infinite` : 'none'
                  }}
                />
              </div>

              {/* HUD Readout */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center bg-gray-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs font-mono">
                <span className="text-gray-300">
                  Engine Input: <strong className="text-white">{inputRpm} RPM</strong>
                </span>
                <span className="text-gray-300">
                  Shaft Output: <strong className="text-amber-400">{outputRpm} RPM</strong>
                </span>
                <span className="text-gray-300">
                  Torque: <strong className="text-emerald-400">{currentGear.torqueTransfer}%</strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">Engine Input RPM: {inputRpm} RPM</span>
                  <span className="text-amber-400 font-bold">{selectedGear} Selected</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="6500"
                  step="100"
                  value={inputRpm}
                  onChange={(e) => setInputRpm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Current Gear Mode:</span>
                  <strong className="text-amber-400">{currentGear.name}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Gear Ratio:</span>
                  <strong className="text-white">{currentGear.ratio !== 0 ? `${currentGear.ratio}:1` : "0.0 (Free)"}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Dual-Clutch Shift Speed:</span>
                  <strong className="text-emerald-400">80 Milliseconds (Instant)</strong>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isRotating ? "Pause Gearbox" : "Engage Gearbox"}</span>
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