"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, ShieldCheck, Wrench, Users, Clock, 
  CheckCircle2, Sparkles, ArrowRight, Cpu, 
  Star, Zap, Phone, Mail, Activity 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function TeamPage() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const technicians = [
    {
      name: "Marcus Vance",
      title: "Lead Master Diagnostic Technician",
      experience: "16+ Years Experience",
      certifications: ["ASE Master Certified (A1-A8)", "BMW & Porsche Factory Master Level", "PicoScope Advanced Scoping"],
      specialty: "High-RPM Misfires, ECU CAN FD Telemetry & Engine Electronics",
      bio: "Marcus leads our computer diagnostics and sensor laboratory with over 16 years specializing in European high-performance engines.",
      quote: "Accuracy begins with proper telemetry before turning any bolt."
    },
    {
      name: "Elena Rostova",
      title: "Master Drivetrain & Transmission Engineer",
      experience: "14+ Years Experience",
      certifications: ["ASE Master Drivetrain (A2, A3)", "Dual-Clutch (DCT/DSG) Specialist", "ZF 8-Speed Certified"],
      specialty: "Planetary Gearbox Overhauls, Mechatronic Solenoids & EPB Systems",
      bio: "Elena specializes in automated manual, dual-clutch, and multi-ratio performance gearboxes with precision micron-level tolerance assembly.",
      quote: "Zero vibration, lightning shifts, and enduring mechanical harmony."
    },
    {
      name: "David Sterling",
      title: "Lead Suspension, Brakes & Chassis Specialist",
      experience: "12+ Years Experience",
      certifications: ["ASE Certified Brakes (A5) & Suspension (A4)", "Hunter 3D Alignment Elite", "Brembo Master Technician"],
      specialty: "Ceramic Brake Systems, Road-Force Balancing & Dynamic Chassis Tuning",
      bio: "David oversees high-speed stability, cornering grip, and sub-millimeter 3D laser alignment calibrations.",
      quote: "Your safety at 100 MPH is non-negotiable."
    },
    {
      name: "Carlos Rivera",
      title: "High-Voltage EV & Climate Systems Master",
      experience: "10+ Years Experience",
      certifications: ["ASE Light Vehicle Diesel (A9)", "EV High-Voltage Certified (L3)", "EPA Section 609 Refrigerant Master"],
      specialty: "EV Battery Cell Balancing, Inverters & Sub-Zero AC Refrigerant Loops",
      bio: "Carlos commands our electrified vehicle bay, handling advanced lithium thermal management and dual-zone climate systems.",
      quote: "The future of automotive engineering is clean, efficient, and precise."
    }
  ];

  const activeTech = technicians[activeTechIndex];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>ASE Certified Master Mechanics</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Meet Our Master <br />
          <span className="gold-gradient-text">Engineering Team</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Every vehicle at HackMob is handled exclusively by factory-certified master technicians with over 50 combined years of high-performance automotive experience.
        </p>
      </MotionFadeUp>

      {/* INTERACTIVE MASTER TECHNICIAN INSPECTOR (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Technician Specialty Radar</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Master Specialist Interactive Showcase
              </h2>
            </div>
            
            <div className="flex gap-1.5 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {technicians.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTechIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    activeTechIndex === idx
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Active Tech Spotlight Card */}
            <div className="lg:col-span-7 relative bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-2xl p-6 border border-gray-800 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{activeTech.name}</h3>
                  <p className="text-xs text-amber-400 font-semibold">{activeTech.title}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {activeTech.experience}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                "{activeTech.quote}"
              </p>

              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Specialty Core Focus:
                </h4>
                <div className="p-3 rounded-xl bg-gray-950 border border-gray-800 text-xs text-amber-300 font-semibold">
                  ⚡ {activeTech.specialty}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Verified Certifications:
                </h4>
                <ul className="space-y-1.5">
                  {activeTech.certifications.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-center text-xs text-gray-300 space-x-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="lg:col-span-5 bg-gray-950 p-6 rounded-2xl border border-gray-800 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Direct Lead Tech Assignment</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Request {activeTech.name.split(" ")[0]} to oversee your next vehicle diagnostic or overhaul.
                </p>
              </div>
              <Link
                href={`/get-quote?tech=${encodeURIComponent(activeTech.name)}`}
                className="gold-glow-btn w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5"
              >
                <span>Request Bay Assignment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* Grid of All Technicians (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicians.map((t, idx) => (
            <MotionStaggerItem
              key={idx}
              className={`glass-card rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${
                activeTechIndex === idx ? "border-amber-400 shadow-xl shadow-amber-500/10" : "border-gray-800"
              }`}
              onClick={() => setActiveTechIndex(idx)}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 font-black">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white">{t.name}</h4>
                <p className="text-xs text-amber-400 font-semibold mb-2">{t.title.split(" ")[1]} Specialist</p>
                <p className="text-xs text-gray-400 line-clamp-3">{t.bio}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-[11px] text-gray-400">
                {t.experience}
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}