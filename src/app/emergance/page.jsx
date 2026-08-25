"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, AlertTriangle, Clock, MapPin, ShieldCheck, 
  Sparkles, ArrowRight, Radio, Navigation, CheckCircle2, 
  Truck, Activity, Zap 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function EmergencyPage() {
  const [etaMinutes, setEtaMinutes] = useState(16);
  const [proximityMiles, setProximityMiles] = useState(2.4);
  const [isDispatched, setIsDispatched] = useState(true);

  useEffect(() => {
    if (!isDispatched) return;
    const interval = setInterval(() => {
      setEtaMinutes((prev) => (prev > 5 ? prev - 1 : 18));
      setProximityMiles((prev) => (prev > 0.6 ? +(prev - 0.2).toFixed(1) : 2.8));
    }, 4500);
    return () => clearInterval(interval);
  }, [isDispatched]);

  const emergencyServices = [
    {
      title: "Flatbed Towing & Recovery",
      desc: "Damage-free wheel-lift and flatbed towing for exotic, AWD, low-clearance, and standard vehicles.",
      eta: "15-20 mins",
      badge: "Heavy Duty"
    },
    {
      title: "Mobile Jump-Start & Alternator",
      desc: "Commercial 12V/24V booster packs, battery load testing, and on-the-spot battery replacement.",
      eta: "10-15 mins",
      badge: "High Priority"
    },
    {
      title: "Emergency Flat Tire Swap",
      desc: "Rapid on-site spare installation, high-pressure tire inflation, or plug repair on the shoulder.",
      eta: "15-20 mins",
      badge: "Rapid Response"
    },
    {
      title: "Emergency Fuel Delivery & Lockout",
      desc: "5 gallons of premium/diesel delivered directly to your stranded location plus damage-free lockout.",
      eta: "12-18 mins",
      badge: "24/7 Mobile"
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>24/7 Priority Emergency Dispatch</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Stranded on the Road? <br />
          <span className="gold-gradient-text">Immediate Help is En Route</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Our GPS-tracked mobile service trucks and damage-free flatbed tow units operate 24 hours a day, 7 days a week with rapid metropolitan response.
        </p>

        {/* 1-Click Call Hotline */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a
            href="tel:+15551234567"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-black text-lg flex items-center justify-center space-x-3 shadow-2xl shadow-red-600/40 hover:scale-105 transition-all"
          >
            <Phone className="w-6 h-6 animate-bounce" />
            <span>Call 24/7 Hotline: (555) 123-4567</span>
          </a>
          <Link
            href="/contact"
            className="outline-glow-btn px-7 py-5 rounded-2xl font-bold text-sm"
          >
            Request Online Dispatch
          </Link>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE GPS RADAR DISPATCH HUD (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-red-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-400 uppercase tracking-wider">
                <Radio className="w-4 h-4 animate-ping" />
                <span>Live GPS Roadside Dispatch Telemetry</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Active Fleet Radar & Response Proximity
              </h2>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-950 p-2 rounded-2xl border border-gray-800 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold text-white">Tow Unit #04 Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Radar Screen */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-gray-950 border border-gray-800 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-emerald-500/20" />
                <div className="w-48 h-48 rounded-full border border-emerald-500/30" />
                <div className="w-32 h-32 rounded-full border border-emerald-500/40" />
                <div className="w-16 h-16 rounded-full border border-emerald-500/50" />
                <div className="w-full h-px bg-emerald-500/20" />
                <div className="h-full w-px bg-emerald-500/20 absolute" />
              </div>

              {/* Rotating Radar Sweep Line */}
              <div 
                className="absolute w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, rgba(16, 185, 129, 0.4) 0deg, transparent 60deg, transparent 360deg)',
                  animation: 'spin 4s linear infinite'
                }}
              />

              {/* Stranded Vehicle Marker */}
              <div className="absolute z-20 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-ping" />
                <span className="text-[10px] font-bold text-red-400 bg-black/80 px-1.5 py-0.5 rounded mt-1">Your Car</span>
              </div>

              {/* Moving Tow Truck Marker */}
              <div 
                className="absolute z-20 flex flex-col items-center transition-all duration-1000"
                style={{
                  top: '32%',
                  left: '64%'
                }}
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-black font-black shadow-lg shadow-emerald-500/50">
                  🚚
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-black/80 px-1.5 py-0.5 rounded mt-1">
                  Unit #04 ({proximityMiles} mi)
                </span>
              </div>

              {/* Bottom Radar Overlay */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center bg-gray-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gray-800 text-xs font-mono">
                <span className="text-gray-300">
                  Estimated ETA: <strong className="text-emerald-400 text-sm font-black">{etaMinutes} MINS</strong>
                </span>
                <span className="text-gray-300">
                  Distance: <strong className="text-amber-400">{proximityMiles} Miles</strong>
                </span>
              </div>

            </div>

            {/* Quick Dispatch Telemetry Summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-3 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>GPS Tracking Accuracy:</span>
                  <strong className="text-emerald-400">Sub-Meter Precision</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Flatbed Tow Equipment:</span>
                  <strong className="text-white">Hydraulic Soft-Strap Tie</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Coverage Territory:</span>
                  <strong className="text-white">Metropolitan 50-Mile Radius</strong>
                </div>
              </div>

              <a
                href="tel:+15551234567"
                className="gold-glow-btn w-full py-3.5 rounded-xl text-center text-xs font-bold flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Confirm Immediate Tow Request</span>
              </a>
            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* Emergency Services Grid (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyServices.map((srv, idx) => (
            <MotionStaggerItem key={idx} className="glass-card rounded-3xl p-6 border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-3 inline-block">
                  {srv.badge}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">{srv.desc}</p>
              </div>

              <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
                <span className="text-gray-400">Avg Arrival:</span>
                <strong className="text-emerald-400 font-bold">{srv.eta}</strong>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}