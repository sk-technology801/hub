"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Car, Shield, Award, Clock, Wrench, CheckCircle2, 
  Star, ChevronRight, Phone, ArrowRight, Sparkles, 
  Cpu, Zap, HelpCircle, ChevronDown, Check,
  Sliders, Calendar, MapPin, AlertCircle, Play, Pause, 
  RotateCcw, Activity, Disc, Gauge, Thermometer, Droplets,
  Flame, Radio, Navigation, Power
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVehicleType, setSelectedVehicleType] = useState("standard");
  const [selectedServiceType, setSelectedServiceType] = useState("oil");

  // Engine Start Button & Headlight Startup Animation
  const [engineStarted, setEngineStarted] = useState(true);
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [isRevving, setIsRevving] = useState(false);

  // Simulator States
  const [simRpm, setSimRpm] = useState(3800);
  const [simIsRunning, setSimIsRunning] = useState(true);
  const [simBrakeApplied, setSimBrakeApplied] = useState(false);
  const [simMode, setSimMode] = useState("wheel");
  const [engineCycle, setEngineCycle] = useState(0);

  // Engine Start / Rev Simulation
  const handleStartButton = () => {
    if (!engineStarted) {
      setEngineStarted(true);
      setHeadlightsOn(true);
      setIsRevving(true);
      setSimRpm(7200);
      setTimeout(() => {
        setSimRpm(900);
        setIsRevving(false);
      }, 1200);
    } else {
      setIsRevving(true);
      setSimRpm(7600);
      setTimeout(() => {
        setSimRpm(3800);
        setIsRevving(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!simIsRunning || !engineStarted) return;
    const interval = setInterval(() => {
      setEngineCycle((prev) => (prev + 1) % 4);
    }, Math.max(200, 1400 - (simRpm / 8000) * 1150));
    return () => clearInterval(interval);
  }, [simIsRunning, simRpm, engineStarted]);

  const boostPsi = (engineStarted && simIsRunning) ? ((simRpm / 8000) * 24.5).toFixed(1) : "0.0";
  const brakeTempC = simBrakeApplied ? Math.min(680, 240 + (simRpm / 8000) * 400) : 110;
  const wheelSpeedMph = (engineStarted && simIsRunning) ? Math.round((simRpm / 8000) * 165 * (simBrakeApplied ? 0.35 : 1)) : 0;

  const brands = [
    "PORSCHE MOTORSPORT", "BMW M-POWER", "MERCEDES-AMG", "AUDI SPORT", 
    "BREMBO CERAMIC", "MOBIL1 RACING", "MOTUL 300V", "HUNTER 3D LASER", "SNAP-ON"
  ];

  const servicesList = [
    {
      id: "engine",
      category: "diagnostic",
      title: "Computerized Engine Diagnostics",
      desc: "Dealer-grade digital scanning, sensor telemetry analysis, and precision tuning for peak horsepower and fuel economy.",
      price: "From $89",
      time: "45 Mins",
      features: ["Live Sensor Data Analysis", "Emissions & Check Engine Codes", "Ignition & Fuel Trim Check"],
      href: "/services/engine",
      badge: "High Tech",
    },
    {
      id: "brake",
      category: "maintenance",
      title: "Precision Brake Service & Rotors",
      desc: "Ceramic pad replacement, rotor resurfacing, brake line bleeding, and ABS electronic module calibration.",
      price: "From $129",
      time: "1-2 Hours",
      features: ["Ultra-Quiet Ceramic Pads", "Rotor Runout Measurement", "Complete Fluid Exchange"],
      href: "/services/brake",
      badge: "Safety Essential",
    },
    {
      id: "oil",
      category: "maintenance",
      title: "Synthetic Oil & Multi-Point Inspection",
      desc: "Ultra-grade full synthetic blend lubricants, OEM filter replacement, and comprehensive 50-point safety check.",
      price: "From $59",
      time: "30 Mins",
      features: ["Full Synthetic Mobil1/Castrol", "OEM Quality Filter", "50-Point Digital Vehicle Health Report"],
      href: "/services/oil-change",
      badge: "Popular",
    },
    {
      id: "transmission",
      category: "mechanical",
      title: "Transmission Repair & Fluid Flush",
      desc: "Automatic, Dual-Clutch, and Manual transmission servicing, electronic torque converter diagnosis, and overhaul.",
      price: "From $189",
      time: "2-3 Hours",
      features: ["Complete Fluid Replacement", "Transmission Filter & Gasket", "Gear Shift Timing Calibration"],
      href: "/services/transmission",
      badge: "Drivetrain",
    },
    {
      id: "ac",
      category: "comfort",
      title: "Climate Control & AC Overhaul",
      desc: "R134a/R1234yf system recharge, laser leak detection, compressor testing, and cabin antimicrobial sanitization.",
      price: "From $99",
      time: "1 Hour",
      features: ["Freon Vacuum & Pure Recharge", "UV Dye Leak Inspection", "Bacterial Air Duct Treatment"],
      href: "/services/ac-repair",
      badge: "All Season",
    },
    {
      id: "tire",
      category: "maintenance",
      title: "Performance Tires & 3D Alignment",
      desc: "Laser wheel alignment, dynamic balancing, rim protection, and tread depth optimization for maximum road grip.",
      price: "From $79",
      time: "45 Mins",
      features: ["3D Digital Laser Alignment", "High-Speed Dynamic Balancing", "Tire Pressure Sensor (TPMS) Sync"],
      href: "/services/tire",
      badge: "Performance",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  const calculateEstimate = () => {
    let base = 70;
    if (selectedServiceType === "oil") base = 65;
    if (selectedServiceType === "brake") base = 145;
    if (selectedServiceType === "engine") base = 99;
    if (selectedServiceType === "transmission") base = 210;
    if (selectedServiceType === "ac") base = 110;

    let multiplier = 1.0;
    if (selectedVehicleType === "luxury") multiplier = 1.45;
    if (selectedVehicleType === "truck") multiplier = 1.25;
    if (selectedVehicleType === "hybrid") multiplier = 1.30;

    const minPrice = Math.round(base * multiplier);
    const maxPrice = Math.round(minPrice * 1.3);
    return { minPrice, maxPrice };
  };

  const { minPrice, maxPrice } = calculateEstimate();

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 relative overflow-hidden">
      
      {/* CINEMATIC MATRIX LED HEADLIGHT BEAMS */}
      {headlightsOn && (
        <div className="absolute top-0 left-0 right-0 h-[650px] pointer-events-none overflow-hidden z-0">
          <div 
            className="absolute top-28 left-[10%] w-[380px] h-[550px] bg-gradient-to-b from-amber-400/20 via-yellow-200/10 to-transparent blur-[60px] transform -rotate-12 origin-top animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute top-28 right-[10%] w-[380px] h-[550px] bg-gradient-to-b from-amber-400/20 via-yellow-200/10 to-transparent blur-[60px] transform rotate-12 origin-top animate-pulse"
            style={{ animationDuration: '4s' }}
          />
        </div>
      )}

      {/* 1. HERO SECTION WITH DIVERSE SLIDE-IN ANIMATIONS */}
      <section className="relative overflow-hidden pt-4 pb-20 lg:py-20 border-b border-gray-800/60 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline (SLIDE LEFT) */}
            <MotionSlideLeft className="lg:col-span-6 text-center lg:text-left space-y-6">
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner animate-float">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Next-Gen Precision Auto Engineering</span>
                </div>

                <button
                  onClick={handleStartButton}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black flex items-center gap-1.5 transition-all shadow-lg select-none ${
                    isRevving
                      ? "bg-red-600 text-white animate-ping scale-110 shadow-red-500/50"
                      : engineStarted
                      ? "bg-amber-500 text-black hover:bg-amber-400 hover:scale-105 shadow-amber-500/30"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Power className="w-3.5 h-3.5" />
                  <span>{isRevving ? "REVVING (7,600 RPM) ⚡" : engineStarted ? "PUSH TO REV" : "START ENGINE"}</span>
                </button>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Master Automotive <br />
                <span className="gold-gradient-text">Care & Precision</span> Performance.
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience dealer-quality vehicle maintenance, computer-guided diagnostics, 
                and certified master mechanics equipped to keep your car operating at peak reliability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link 
                  href="/get-quote" 
                  className="gold-glow-btn w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold flex items-center justify-center space-x-2.5"
                >
                  <Wrench className="w-5 h-5 text-black" />
                  <span>Book Immediate Service</span>
                </Link>

                <a 
                  href="tel:+15551234567" 
                  className="outline-glow-btn w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>(555) 123-4567</span>
                </a>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-gray-800/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">24-Mo Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">OEM Parts Only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium">Free Inspection</span>
                </div>
              </div>
            </MotionSlideLeft>

            {/* Right Telemetry HUD (SLIDE RIGHT) */}
            <MotionSlideRight className="lg:col-span-6">
              <div className={`glass-card rounded-3xl p-6 sm:p-7 border-amber-500/35 shadow-2xl relative overflow-hidden transition-all duration-300 ${
                isRevving ? "shadow-amber-500/50 scale-[1.02] border-amber-400" : "neon-glow"
              }`}>
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Live Cockpit Telemetry HUD
                    </span>
                  </div>

                  <div className="flex gap-1 bg-gray-950 p-1 rounded-xl border border-gray-800 text-[11px]">
                    <button
                      onClick={() => setSimMode("wheel")}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                        simMode === "wheel" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      Brembo Wheel
                    </button>
                    <button
                      onClick={() => setSimMode("engine")}
                      className={`px-2.5 py-1 rounded-lg font-semibold transition ${
                        simMode === "engine" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      4-Stroke Cylinder
                    </button>
                  </div>
                </div>

                {/* Canvas */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-gray-800 flex items-center justify-center overflow-hidden p-4">
                  
                  <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border border-dashed border-amber-400 animate-spin-slow" />
                    <div className="w-40 h-40 rounded-full border border-amber-400 absolute animate-ping opacity-25" style={{ animationDuration: '6s' }} />
                    <div className="w-full h-px bg-amber-400 absolute" />
                    <div className="h-full w-px bg-amber-400 absolute" />
                  </div>

                  {simMode === "wheel" && (
                    <div className="relative flex items-center justify-center">
                      <div 
                        className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full border-8 border-gray-700 shadow-2xl flex items-center justify-center"
                        style={{
                          transform: `rotate(${simIsRunning ? (simBrakeApplied ? 45 : 360) : 0}deg)`,
                          animation: simIsRunning 
                            ? `spin ${Math.max(0.12, 3.5 - (simRpm / 8000) * 3.3)}s linear infinite` 
                            : 'none'
                        }}
                      >
                        <div 
                          className="w-36 h-36 rounded-full border-4 border-gray-600 relative flex items-center justify-center"
                          style={{
                            background: simBrakeApplied 
                              ? 'radial-gradient(circle, #7f1d1d 0%, #450a0a 100%)' 
                              : 'radial-gradient(circle, #374151 0%, #1f2937 100%)'
                          }}
                        >
                          {[...Array(6)].map((_, idx) => (
                            <div
                              key={idx}
                              className="absolute w-full h-2 bg-gray-500 rounded-full"
                              style={{ transform: `rotate(${idx * 30}deg)` }}
                            />
                          ))}
                          <div className="w-14 h-14 rounded-full bg-black border-2 border-amber-400 z-10 flex items-center justify-center font-black text-[10px] text-amber-400">
                            HACKMOB
                          </div>
                        </div>
                      </div>

                      <div 
                        className={`absolute -top-2 left-6 z-20 px-3 py-1.5 rounded-xl border font-black text-xs transition-all duration-300 shadow-xl ${
                          simBrakeApplied
                            ? "bg-red-600 border-red-400 text-white scale-110 shadow-red-500/50 animate-pulse"
                            : "bg-amber-500 border-amber-400 text-black"
                        }`}
                      >
                        {simBrakeApplied ? "CLAMPING (680°C)" : "BREMBO 6-POT"}
                      </div>
                    </div>
                  )}

                  {simMode === "engine" && (
                    <div className="relative w-48 h-56 flex flex-col items-center justify-center">
                      <div className="w-32 h-44 rounded-2xl border-4 border-gray-700 bg-gray-950 relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-1 z-30 flex flex-col items-center">
                          <div className="w-3 h-3 bg-amber-400 rounded-t" />
                          {engineCycle === 2 && simIsRunning && (
                            <div className="w-20 h-10 bg-gradient-to-b from-yellow-300 via-amber-500 to-red-600 rounded-full blur-sm animate-ping absolute top-2" />
                          )}
                        </div>

                        <div className="w-full flex justify-between px-4 pt-2">
                          <div className={`w-3 h-4 rounded-b transition-all ${engineCycle === 0 ? "bg-blue-400 translate-y-1" : "bg-gray-600"}`} />
                          <div className={`w-3 h-4 rounded-b transition-all ${engineCycle === 3 ? "bg-orange-500 translate-y-1" : "bg-gray-600"}`} />
                        </div>

                        <div 
                          className="w-24 h-12 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 rounded-lg border-2 border-gray-600 absolute transition-all duration-200 shadow-lg flex items-center justify-center"
                          style={{
                            top: engineCycle === 0 || engineCycle === 2 ? '65%' : '25%'
                          }}
                        >
                          <span className="text-[10px] font-black text-black">PISTON</span>
                        </div>

                        <div 
                          className="w-3 bg-gray-600 absolute bottom-2 rounded transition-all duration-200"
                          style={{
                            height: engineCycle === 0 || engineCycle === 2 ? '30px' : '55px'
                          }}
                        />
                      </div>

                      <div className="mt-2 text-xs font-bold text-amber-400">
                        Stroke: {["1. Air/Fuel INTAKE", "2. COMPRESSION", "3. COMBUSTION POWER ⚡", "4. EXHAUST GAS"][engineCycle]}
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center bg-gray-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs">
                    <span className="text-gray-300 flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-amber-400" />
                      <strong className="text-white">{simRpm}</strong> RPM
                    </span>
                    <span className="text-gray-300 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <strong className="text-white">{wheelSpeedMph}</strong> MPH
                    </span>
                    <span className="text-gray-300 flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5 text-amber-400" />
                      <strong className="text-white">{brakeTempC}°C</strong>
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-gray-300 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-amber-400" />
                        Interactive Engine Throttle: {simRpm} RPM
                      </span>
                      <span className="text-amber-400 font-bold">Boost: {boostPsi} PSI</span>
                    </div>
                    <input
                      type="range"
                      min="800"
                      max="8000"
                      step="100"
                      value={simRpm}
                      onChange={(e) => setSimRpm(Number(e.target.value))}
                      className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSimIsRunning(!simIsRunning)}
                      className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                    >
                      {simIsRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{simIsRunning ? "Pause Sim" : "Start Sim"}</span>
                    </button>

                    <button
                      onMouseDown={() => setSimBrakeApplied(true)}
                      onMouseUp={() => setSimBrakeApplied(false)}
                      onTouchStart={() => setSimBrakeApplied(true)}
                      onTouchEnd={() => setSimBrakeApplied(false)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition select-none ${
                        simBrakeApplied 
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/40" 
                          : "bg-amber-500 text-black hover:bg-amber-400"
                      }`}
                    >
                      <Disc className="w-3.5 h-3.5" />
                      <span>{simBrakeApplied ? "Braking Clamped!" : "Hold To Brake"}</span>
                    </button>
                  </div>
                </div>

              </div>
            </MotionSlideRight>

          </div>
        </div>
      </section>

      {/* 2. INFINITE AUTOMOTIVE BRAND MARQUEE TICKER (ZOOM POP) */}
      <MotionZoomPop className="py-4 bg-gray-950 border-b border-gray-800 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, bIdx) => (
            <div key={bIdx} className="inline-flex items-center space-x-6 mx-8 text-xs font-mono font-bold text-gray-400 hover:text-amber-400 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </MotionZoomPop>

      {/* 3. STATS BAR SECTION (3D FLIP UP) */}
      <MotionFlip3D className="bg-gray-950/70 border-b border-gray-800/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-800">
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">15+</div>
              <div className="text-sm font-semibold text-white mt-1">Years Experience</div>
              <div className="text-xs text-gray-400 mt-0.5">Master Technicians</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">18,500+</div>
              <div className="text-sm font-semibold text-white mt-1">Vehicles Serviced</div>
              <div className="text-xs text-gray-400 mt-0.5">All Makes & Models</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">99.4%</div>
              <div className="text-sm font-semibold text-white mt-1">Customer Satisfaction</div>
              <div className="text-xs text-gray-400 mt-0.5">5-Star Google Rated</div>
            </div>
            <div className="p-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">24/7</div>
              <div className="text-sm font-semibold text-white mt-1">Emergency Dispatch</div>
              <div className="text-xs text-gray-400 mt-0.5">Rapid Roadside Assistance</div>
            </div>
          </div>
        </div>
      </MotionFlip3D>

      {/* 4. CORE SERVICES SHOWCASE (STAGGERED CONTAINER) */}
      <section id="services" className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionFadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Our Specialties</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Comprehensive Automotive Solutions
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
                From routine preventative care to complex drivetrain rebuilding, our specialized bays deliver OEM precision.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 bg-gray-900/90 p-1.5 rounded-2xl border border-gray-800">
              {[
                { id: "all", label: "All Services" },
                { id: "maintenance", label: "Maintenance" },
                { id: "diagnostic", label: "Diagnostics" },
                { id: "mechanical", label: "Mechanical" },
                { id: "comfort", label: "Climate & AC" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === tab.id
                      ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </MotionFadeUp>

          {/* Staggered Grid */}
          <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <MotionStaggerItem 
                key={service.id} 
                className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {service.badge}
                    </span>
                    <div className="text-right">
                      <span className="text-lg font-black text-white">{service.price}</span>
                      <span className="text-[11px] text-gray-400 block">Est. {service.time}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-gray-800/80 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-300 space-x-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center justify-between">
                  <Link 
                    href={service.href} 
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 group/btn"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href={`/get-quote?service=${encodeURIComponent(service.title)}`}
                    className="bg-gray-800 hover:bg-amber-500 hover:text-black text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                  >
                    Book Bay
                  </Link>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>

        </div>
      </section>

      {/* 5. INTERACTIVE INSTANT REPAIR ESTIMATOR (ZOOM IN SPRING) */}
      <MotionZoomPop className="py-16 bg-gradient-to-b from-[#0b0f19] to-[#080c14] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border-amber-500/20 shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Transparent Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Instant Auto Repair Cost Estimator
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Select your vehicle make category and service for an immediate transparent price range.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "standard", label: "Domestic / Asian" },
                      { id: "luxury", label: "European / Luxury" },
                      { id: "truck", label: "Truck / Heavy Duty" },
                      { id: "hybrid", label: "Hybrid / EV" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedVehicleType(type.id)}
                        className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                          selectedVehicleType === type.id
                            ? "bg-amber-500/15 border-amber-400 text-amber-300 shadow-sm"
                            : "bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Service Category
                  </label>
                  <select
                    value={selectedServiceType}
                    onChange={(e) => setSelectedServiceType(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="oil">Full Synthetic Oil & Filter Service</option>
                    <option value="brake">Ceramic Brake Pads & Rotor Inspection</option>
                    <option value="engine">Computerized Engine Diagnostic Scan</option>
                    <option value="transmission">Transmission Fluid Flush & Service</option>
                    <option value="ac">AC Evacuation & Refrigerant Recharge</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-950/90 rounded-2xl p-6 border border-amber-500/30 text-center flex flex-col items-center justify-center space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-gray-400">
                  Estimated Price Range
                </span>
                
                <div className="text-4xl sm:text-5xl font-black text-amber-400">
                  ${minPrice} - ${maxPrice}
                </div>

                <p className="text-xs text-gray-400 max-w-xs">
                  Includes full certified labor, premium parts, multi-point health check, and 24-month warranty.
                </p>

                <Link
                  href={`/get-quote?service=${selectedServiceType}&type=${selectedVehicleType}`}
                  className="gold-glow-btn w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Lock In This Estimate</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </MotionZoomPop>

      {/* 6. WHY CHOOSE HACKMOB (SLIDE LEFT & SLIDE RIGHT) */}
      <section className="py-20 bg-gray-950/80 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <MotionSlideLeft className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Why Drivers Trust HackMob
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Engineered for Reliability. Built on Honesty.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We combine dealership-level computerized diagnostic equipment with the personalized service 
                and honest pricing of an independent master garage.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "ASE Master Certified Technicians",
                    desc: "Our mechanics undergo 80+ hours of annual advanced training across European, Asian, and Domestic platforms.",
                  },
                  {
                    title: "24-Month / 24,000-Mile Warranty",
                    desc: "Every repair is protected by our nationwide warranty covering both parts and labor.",
                  },
                  {
                    title: "Real-Time Digital Inspection Reports",
                    desc: "See high-resolution photos and diagnostic readouts of your car before authorizing any repair.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3.5">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionSlideLeft>

            <MotionSlideRight className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6 border-gray-800 text-center">
                  <Cpu className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white">OBD-II / CAN FD</h4>
                  <p className="text-xs text-gray-400 mt-1">Deep bidirectional computer telemetry</p>
                </div>
                <div className="glass-card rounded-2xl p-6 border-gray-800 text-center">
                  <Shield className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white">OEM Factory Parts</h4>
                  <p className="text-xs text-gray-400 mt-1">Direct genuine supplier components</p>
                </div>
                <div className="glass-card rounded-2xl p-6 border-gray-800 text-center">
                  <Clock className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white">Same-Day Express</h4>
                  <p className="text-xs text-gray-400 mt-1">Quick turnaround on priority maintenance</p>
                </div>
                <div className="glass-card rounded-2xl p-6 border-gray-800 text-center">
                  <Award className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white">100% Price Lock</h4>
                  <p className="text-xs text-gray-400 mt-1">No hidden fees or unexpected extras</p>
                </div>
              </div>
            </MotionSlideRight>

          </div>
        </div>
      </section>

      {/* 7. EMERGENCY & ROADSIDE BANNER CTA (3D FLIP UP) */}
      <MotionFlip3D className="py-16 relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/15 text-black font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>24/7 Rapid Response Dispatch</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Stranded or Need Emergency Repair?
              </h2>
              <p className="text-base text-gray-900 font-medium max-w-xl">
                Our mobile diagnostic units and flatbed towing teams are on call 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="tel:+15551234567"
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-black text-base hover:bg-gray-900 transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call (555) 123-4567</span>
              </a>
              <Link
                href="/get-quote"
                className="w-full sm:w-auto bg-white/90 text-black hover:bg-white px-7 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center shadow-lg"
              >
                <span>Book Appointment Online</span>
              </Link>
            </div>
          </div>
        </div>
      </MotionFlip3D>

    </div>
  );
};

export default HomePage;