"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, ShieldCheck, Wrench, Users, Clock, 
  CheckCircle2, Sparkles, ArrowRight, Cpu, 
  Calendar, Activity, Star, Zap 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function AboutPage() {
  const [activeEra, setActiveEra] = useState("2026");

  const eraDetails = {
    2011: {
      year: "2011",
      title: "Founding & Precision Roots",
      desc: "Founded as a specialized 2-bay independent German performance garage with a commitment to honest, transparent diagnostic reports.",
      stats: "2 Bays • 450 Cars/Yr",
      tech: "Analog Pressure Scopes & Manual Feeler Gauges"
    },
    2016: {
      year: "2016",
      title: "Master Tuning & Drivetrain Lab",
      desc: "Expanded into a full 8-bay performance engineering center with Hunter 3D laser alignment and automated dynamometer testing.",
      stats: "8 Bays • 4,200 Cars/Yr",
      tech: "Hunter HawkEye Elite & Dynojet Chassis Dyno"
    },
    2021: {
      year: "2021",
      title: "EV, Hybrid & CAN Bus Evolution",
      desc: "Invested over $500k in high-voltage diagnostic tools, thermal imaging scanners, and master EV technician factory training.",
      stats: "14 Bays • 12,000 Cars/Yr",
      tech: "PicoScope 4425A & Factory BMW/Audi ICOM Software"
    },
    2026: {
      year: "2026",
      title: "AI Telemetry & Clean Room Engineering",
      desc: "State-of-the-art climate-controlled clean room facility with digital video health inspections sent instantly to drivers' phones.",
      stats: "20 Bays • 18,500+ Cars/Yr",
      tech: "DoIP Ethernet Bus Scanners & AI Diagnostic Systems"
    }
  };

  const currentEra = eraDetails[activeEra];

  const coreValues = [
    {
      title: "100% Price Lock Transparency",
      desc: "We never add unapproved charges. You receive a digital video health report with exact line-item costs before any wrench touches your car.",
      icon: ShieldCheck
    },
    {
      title: "ASE Master Certified Mechanics",
      desc: "Every lead technician holds ASE Master certification (A1-A8) and completes 80+ hours of continuous factory updates each year.",
      icon: Award
    },
    {
      title: "24-Mo / 24,000-Mile Warranty",
      desc: "We stand firmly behind our engineering with a comprehensive nationwide warranty covering both genuine OEM parts and certified labor.",
      icon: CheckCircle2
    },
    {
      title: "Dealer-Grade Telemetry",
      desc: "Equipped with OEM-level bidirectional scanning tools capable of deep ECU module programming at a fraction of dealership rates.",
      icon: Cpu
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Engineering Integrity Since 2011</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Craftsmanship, Technology & <br />
          <span className="gold-gradient-text">Uncompromising Trust</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          HackMob Auto Services was founded on a simple principle: combine dealership-level diagnostic technology with the honest, transparent customer experience drivers deserve.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Wrench className="w-4 h-4 text-black" />
            <span>Schedule Workshop Visit</span>
          </Link>
          <Link href="/team" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Meet Master Technicians</span>
          </Link>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE 15-YEAR HERITAGE (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>15-Year Workshop Milestone Journey</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                The Evolution of HackMob Master Engineering
              </h2>
            </div>

            <div className="flex gap-1.5 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {["2011", "2016", "2021", "2026"].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setActiveEra(yr)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition ${
                    activeEra === yr
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 scale-105"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-gray-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-4xl font-black text-amber-400">{currentEra.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{currentEra.title}</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {currentEra.stats}
                </span>
              </div>

              <p className="relative z-10 text-sm text-gray-300 leading-relaxed max-w-lg">
                {currentEra.desc}
              </p>

              <div className="relative z-10 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <span>Facility Equipment Standard:</span>
                <strong className="text-amber-400">{currentEra.tech}</strong>
              </div>

              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-3 text-xs">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Workshop Capability Standards
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>German & European Telemetry:</span>
                    <strong className="text-white">99.8%</strong>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[99.8%] h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Transmission & Drivetrain Overhaul:</span>
                    <strong className="text-white">98.5%</strong>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[98.5%] h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-gray-300 mb-1">
                    <span>Electric & Hybrid High-Voltage:</span>
                    <strong className="text-white">97.0%</strong>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[97%] h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 text-center font-semibold">
                ⭐️ 18,500+ Vehicles Serviced with 99.4% First-Time Fix Accuracy
              </div>
            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* 4 Core Pillars (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <MotionFadeUp className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Foundation</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Core Engineering Pillars</h2>
        </MotionFadeUp>

        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <MotionStaggerItem key={idx} className="glass-card rounded-3xl p-7 border-gray-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{val.desc}</p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}