"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Disc, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Clock, Wrench, Play, Pause, 
  RotateCcw, Activity, Gauge, Sliders, AlertCircle, Flame 
} from "lucide-react";

export default function TireServicePage() {
  const [activePlan, setActivePlan] = useState(1);

  // Interactive 3D Wheel, Laser Alignment & TPMS Simulator States
  const [wheelSpeedMph, setWheelSpeedMph] = useState(85);
  const [tpmsPsi, setTpmsPsi] = useState(34);
  const [camberAngle, setCamberAngle] = useState(-1.0);
  const [isRotating, setIsRotating] = useState(true);

  const isHighSpeedDrift = wheelSpeedMph > 70;
  const tireStatus = tpmsPsi < 28 ? "Under-Inflated (Wear Risk)" : tpmsPsi > 40 ? "Over-Inflated (Harsh Ride)" : "Optimal PSI (Max Grip)";
  const roadGripScore = Math.max(40, 100 - Math.abs(camberAngle) * 12 - (tpmsPsi < 30 ? (30 - tpmsPsi) * 4 : 0));

  const packages = [
    {
      title: "3D Laser Wheel Alignment",
      price: "$79",
      time: "45 mins",
      desc: "Precision digital multi-axis alignment for camber, caster, and toe angles.",
      features: [
        "Sub-millimeter 3D laser wheel alignment",
        "Steering angle sensor (SAS) recalibration",
        "Tire wear pattern analysis",
        "Suspension ball joint & tie rod check"
      ]
    },
    {
      title: "Mounting, Road-Force Balancing & TPMS",
      price: "$99",
      time: "1 hour",
      desc: "High-speed dynamic road force balancing, scratch-free rim mounting, and TPMS sensor programming.",
      features: [
        "Hunter Road Force high-speed balancing",
        "Touchless rim mounting (up to 24\" wheels)",
        "TPMS sensor diagnostics & sync",
        "New rubber/metal valve stems"
      ]
    },
    {
      title: "Complete 4-Tire Performance Package",
      price: "$499+",
      time: "1-2 hours",
      desc: "Brand new Michelin, Continental, or Pirelli tire set with lifetime rotations and flat repair.",
      features: [
        "Set of 4 premium all-season or performance tires",
        "Free lifetime tire rotations every 5,000 miles",
        "Free road hazard puncture repairs",
        "3D Laser alignment included"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Road Grip, Balance & Alignment</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Performance Tires & <br />
          <span className="gold-gradient-text">3D Laser Wheel Alignment</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Eliminate high-speed steering wobble, prevent uneven tread wear, and maximize cornering stability with our Hunter road-force balancing and 3D laser alignment.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=tire" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Book Tire Service</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </section>

      {/* INTERACTIVE 3D WHEEL WITH DRIFT TIRE SMOKE & LASER HUD */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Disc className="w-4 h-4" />
                <span>Hunter 3D Alignment & Road-Force Telemetry</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Alloy Wheel High-Speed Spin & Smoke Simulator
              </h2>
            </div>
            {isHighSpeedDrift && (
              <div className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full border border-amber-400 text-xs font-bold animate-pulse">
                🔥 High-Speed Track Run ({wheelSpeedMph} MPH)
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Rotating Wheel with Laser Crosshair & Smoke Puffs */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Animated Tire Smoke Puffs on High Speed */}
              {isHighSpeedDrift && isRotating && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 flex items-center justify-around">
                  {[...Array(6)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-16 h-16 rounded-full bg-gray-400/20 blur-xl animate-ping"
                      style={{
                        animationDuration: '1.2s',
                        animationDelay: `${idx * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Laser Alignment Crosshair Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-px bg-amber-400 border-t border-dashed border-amber-400" />
                <div className="h-full w-px bg-amber-400 border-l border-dashed border-amber-400 absolute" />
                <div className="w-56 h-56 rounded-full border border-amber-400/50 absolute" />
              </div>

              {/* 3D Rotating Wheel Assembly */}
              <div 
                className="relative w-48 h-48 rounded-full border-[14px] border-gray-900 shadow-2xl flex items-center justify-center transition-transform duration-300"
                style={{
                  transform: `rotateY(${camberAngle * 8}deg) rotateZ(${camberAngle * 4}deg)`
                }}
              >
                {/* Rotating Alloy Rim Spokes */}
                <div 
                  className="w-36 h-36 rounded-full border-4 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-950 relative flex items-center justify-center shadow-inner"
                  style={{
                    animation: isRotating 
                      ? `spin ${Math.max(0.12, 3 - (wheelSpeedMph / 120) * 2.8)}s linear infinite` 
                      : 'none'
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-3 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full"
                      style={{ transform: `rotate(${i * 72}deg)` }}
                    />
                  ))}

                  <div className="w-12 h-12 rounded-full bg-black border-2 border-amber-400 z-10 flex items-center justify-center font-black text-[9px] text-amber-400">
                    245/40R19
                  </div>
                </div>
              </div>

              {/* Real-Time Laser Alignment Angle HUD */}
              <div className="absolute top-3 left-4 bg-gray-950/90 px-3 py-1.5 rounded-xl border border-gray-800 text-xs text-amber-400 font-bold">
                Laser Camber: {camberAngle > 0 ? `+${camberAngle}` : camberAngle}°
              </div>

              {/* Overlay HUD */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center bg-gray-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs">
                <span className="text-gray-300 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-amber-400" />
                  Speed: <strong className="text-white">{wheelSpeedMph} MPH</strong>
                </span>
                <span className="text-gray-300 flex items-center gap-1">
                  <Disc className="w-3.5 h-3.5 text-amber-400" />
                  TPMS: <strong className={tpmsPsi < 28 ? "text-red-400" : "text-emerald-400"}>{tpmsPsi} PSI</strong>
                </span>
                <span className="text-gray-300 flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  Road Grip: <strong className="text-amber-400">{roadGripScore}%</strong>
                </span>
              </div>

            </div>

            {/* Controls */}
            <div className="lg:col-span-5 space-y-4">
              {/* Wheel Speed Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">Simulated Wheel Speed: {wheelSpeedMph} MPH</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={wheelSpeedMph}
                  onChange={(e) => setWheelSpeedMph(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* TPMS Pressure Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">Tire Pressure (TPMS): {tpmsPsi} PSI</span>
                  <span className={`text-[11px] font-bold ${tpmsPsi < 28 ? "text-red-400" : "text-emerald-400"}`}>
                    {tireStatus}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="45"
                  value={tpmsPsi}
                  onChange={(e) => setTpmsPsi(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Camber Angle Adjuster */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-300 font-semibold">3D Laser Camber Angle: {camberAngle}°</span>
                  <button 
                    onClick={() => setCamberAngle(0.0)}
                    className="text-[10px] text-amber-400 underline font-bold"
                  >
                    Reset to 0.0°
                  </button>
                </div>
                <input
                  type="range"
                  min="-3.0"
                  max="3.0"
                  step="0.5"
                  value={camberAngle}
                  onChange={(e) => setCamberAngle(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsRotating(!isRotating)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isRotating ? "Pause Wheel" : "Spin Wheel"}</span>
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