"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, CheckCircle2, Sliders, ArrowRight, 
  Wrench, Camera, ShieldCheck, Star 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sliderPosition, setSliderPosition] = useState(50);

  const projects = [
    {
      title: "Porsche 911 GT3 Engine Carbon Clean & Dyno Calibration",
      category: "engine",
      type: "Performance Overhaul",
      gain: "+34 BHP Restored",
      before: "Intake valve direct-injection carbon blockage & misfire at 6,500 RPM",
      after: "Ultrasonic walnut blast clean, new iridium plugs & 505 BHP dyno verified"
    },
    {
      title: "BMW M4 Competition Ceramic Rotor & Pad Overhaul",
      category: "brakes",
      type: "Brake Overhaul",
      gain: "60-0 in 108 ft",
      before: "Scored OEM cast iron rotors with high brake dust & pedal pulse",
      after: "Cross-drilled coated sport rotors with dust-free ceramic compound"
    },
    {
      title: "Audi RS6 Avant Dual-Clutch Transmission Mechatronic Rebuild",
      category: "transmission",
      type: "Drivetrain",
      gain: "80ms Shift Speed",
      before: "Jerky 1st-to-2nd gear engagement & hydraulic solenoid slip code",
      after: "New OEM solenoid pack, mechatronic fluid exchange & adaptation re-learn"
    },
    {
      title: "Mercedes-AMG C63 High-Output Synthetic Service & Detailing",
      category: "maintenance",
      type: "Precision Pitstop",
      gain: "100% Health Score",
      before: "Overdue 12,000-mile service with dark oxidized motor oil",
      after: "German Liqui Moly full synthetic flush & ceramic engine protectant"
    }
  ];

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Camera className="w-4 h-4 text-amber-400" />
          <span>Workshop Project Transformations</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Master Engineering <br />
          <span className="gold-gradient-text">Project Gallery</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Inspect recent high-performance engine overhauls, ceramic brake transformations, and drivetrain restorations executed in our clean-room workshop bays.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { id: "all", label: "All Projects" },
            { id: "engine", label: "Engine Builds" },
            { id: "brakes", label: "Ceramic Brakes" },
            { id: "transmission", label: "Transmission" },
            { id: "maintenance", label: "Synthetic Care" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === tab.id
                  ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                  : "bg-gray-900 border border-gray-800 text-gray-300 hover:border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE BEFORE / AFTER SLIDER (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>Interactive Transformation Viewer</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Before vs. After Workshop Restoration
              </h2>
            </div>
            <div className="text-xs text-gray-400 font-medium">
              Drag slider to compare vehicle state
            </div>
          </div>

          {/* Interactive Split Canvas */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
            
            <div 
              className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-gray-900 to-gray-950 p-6 flex flex-col justify-between"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold w-fit border border-red-500/30">
                BEFORE HACKMOB
              </div>
              <div className="max-w-sm">
                <h4 className="text-lg font-bold text-red-300">Worn, Carbonized & Failing Components</h4>
                <p className="text-xs text-gray-400 mt-1">Direct-injection carbon buildup, brake disc pulsation, and sluggish shifts.</p>
              </div>
              <div className="text-xs text-red-400 font-mono">Telemetry: Multiple Fault Codes • High Friction</div>
            </div>

            <div 
              className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900 to-amber-950/40 p-6 flex flex-col justify-between items-end text-right"
              style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold w-fit border border-emerald-500/30">
                AFTER HACKMOB RESTORATION
              </div>
              <div className="max-w-sm">
                <h4 className="text-lg font-bold text-amber-300">Clean-Room Precision Calibrated</h4>
                <p className="text-xs text-gray-300 mt-1">Ultrasonic cleaned, OEM replacement parts, and dyno road-tested with 2-year warranty.</p>
              </div>
              <div className="text-xs text-emerald-400 font-mono">Telemetry: Zero Fault Codes • 100% Dyno Verified</div>
            </div>

            <div 
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-xl pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-black font-black text-xs shadow-2xl">
                ⇆
              </div>
            </div>

          </div>

          {/* Interactive Range Slider */}
          <div className="mt-5">
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>← Slide for Before Condition</span>
              <span>Slide for After Condition →</span>
            </div>
          </div>

        </div>
      </MotionZoomPop>

      {/* Projects Grid (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj, idx) => (
            <MotionStaggerItem key={idx} className="glass-card rounded-3xl p-7 border-gray-800 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {proj.type}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {proj.gain}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{proj.title}</h3>

                <div className="space-y-2 text-xs bg-gray-950 p-4 rounded-2xl border border-gray-800">
                  <div className="text-red-400">
                    <strong>Initial Symptom:</strong> {proj.before}
                  </div>
                  <div className="text-emerald-400 pt-1 border-t border-gray-900">
                    <strong>HackMob Solution:</strong> {proj.after}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-400">24-Month Warranty Protected</span>
                <Link href="/get-quote" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  <span>Book Similar Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}