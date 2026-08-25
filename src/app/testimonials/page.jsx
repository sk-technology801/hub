"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Star, Quote, ShieldCheck, Sparkles, ArrowRight, 
  User, CheckCircle2, MessageSquarePlus, ThumbsUp, 
  Sliders, Award 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [helpfulCount, setHelpfulCount] = useState({ 0: 42, 1: 38, 2: 29, 3: 19, 4: 51, 5: 33 });

  const toggleHelpful = (idx) => {
    setHelpfulCount((prev) => ({ ...prev, [idx]: prev[idx] + 1 }));
  };

  const testimonials = [
    {
      name: "Marcus Sterling",
      vehicle: "Porsche 911 GT3",
      rating: 5,
      service: "Diagnostic & Performance Tuning",
      text: "HackMob's precision diagnostics identified an elusive high-RPM misfire that the dealership couldn't pinpoint for 3 weeks. Master Marcus and Elena are absolute geniuses with automotive telemetry.",
      category: "diagnostic",
      date: "Verified 2 days ago"
    },
    {
      name: "Sophia Vance",
      vehicle: "Audi Q7 Quattro",
      rating: 5,
      service: "Ceramic Brake & Rotor Overhaul",
      text: "The digital video health inspection sent straight to my phone was groundbreaking. Transparent breakdown, zero pushy upsells, and the brakes feel sharper than showroom new.",
      category: "brakes",
      date: "Verified 1 week ago"
    },
    {
      name: "David Chen",
      vehicle: "BMW M3 Competition",
      rating: 5,
      service: "Dual-Clutch Transmission Service",
      text: "Flawless transmission flush and fluid exchange. My shifts are lightning crisp with zero hesitation. Best independent German performance workshop in the state.",
      category: "transmission",
      date: "Verified 2 weeks ago"
    },
    {
      name: "Rachel Morgan",
      vehicle: "Lexus RX 350",
      rating: 5,
      service: "Synthetic Oil & 50-Point Inspection",
      text: "In and out in 35 minutes using their express bay. Clean customer lounge with great espresso and friendly master mechanics who genuinely care.",
      category: "maintenance",
      date: "Verified 3 weeks ago"
    },
    {
      name: "Carlos Mendez",
      vehicle: "Ford F-150 EcoBoost",
      rating: 5,
      service: "Emergency Towing & Alternator Repair",
      text: "Stranded on the freeway at 9 PM on a Tuesday. HackMob dispatched a flatbed in 18 minutes and had my alternator replaced first thing the next morning. Lifesavers!",
      category: "emergency",
      date: "Verified 1 month ago"
    },
    {
      name: "Aiden Scott",
      vehicle: "Mercedes-Benz C63 AMG",
      rating: 5,
      service: "Climate Control & R1234yf Overhaul",
      text: "AC compressor failed right during a 95-degree heatwave. They performed a full system vacuum and pure refrigerant recharge with a 2-year warranty.",
      category: "maintenance",
      date: "Verified 1 month ago"
    }
  ];

  const filtered = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Verified Driver Testimonials</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Trusted by Over <span className="gold-gradient-text">18,500 Drivers</span>.
        </h1>

        {/* Live Rating Benchmark Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-gray-950 border border-amber-500/30 mt-4 shadow-xl">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-black text-white ml-2">4.9 / 5.0 Star Overall Rating</span>
          <span className="text-xs text-gray-400">(2,840+ Reviews)</span>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {[
            { id: "all", label: "All Reviews" },
            { id: "diagnostic", label: "Diagnostics" },
            { id: "brakes", label: "Brakes" },
            { id: "transmission", label: "Transmission" },
            { id: "maintenance", label: "Maintenance" },
            { id: "emergency", label: "Emergency" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === tab.id
                  ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                  : "bg-gray-900 border border-gray-800 text-gray-300 hover:border-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </MotionFadeUp>

      {/* Reviews Cards Grid (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <MotionStaggerItem
              key={idx}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between border-gray-800 hover:border-amber-500/40 group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gray-600 group-hover:text-amber-400 transition-colors" />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">{item.vehicle}</p>
                  </div>
                  <span className="text-[11px] font-semibold bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/20">
                    {item.service.split(' ')[0]}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-900">
                  <span>{item.date}</span>
                  <button
                    onClick={() => toggleHelpful(idx)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-amber-400 transition"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful ({helpfulCount[idx] || 25})</span>
                  </button>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

      {/* Leave a review CTA (3D FLIP UP) */}
      <MotionFlip3D className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
        <div className="glass-panel rounded-3xl p-8 border-amber-500/30">
          <h3 className="text-2xl font-bold text-white">Experience Exceptional Automotive Care</h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
            Join thousands of satisfied drivers who trust HackMob for their vehicle's safety, longevity, and performance.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/get-quote" className="gold-glow-btn px-7 py-3 rounded-xl font-bold text-xs sm:text-sm">
              Schedule Your Service
            </Link>
            <Link href="/review" className="outline-glow-btn px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm">
              Leave a Review
            </Link>
          </div>
        </div>
      </MotionFlip3D>

    </div>
  );
}
