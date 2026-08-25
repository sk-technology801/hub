"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Scale, Shield, Users, FileText, AlertTriangle, Sparkles } from "lucide-react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "estimates",
      title: "100% Price Lock & Digital Estimates",
      icon: Scale,
      content: "All estimates generated via our digital health inspection system are guaranteed price-locked upon customer authorization. No additional labor or parts charges will be incurred without prior written or digital customer approval."
    },
    {
      id: "warranty",
      title: "24-Month / 24,000-Mile Nationwide Warranty",
      icon: Shield,
      content: "Standard mechanical and electronic repairs performed by HackMob Master Technicians are covered by our 24-Month or 24,000-Mile nationwide warranty covering both parts and labor, subject to standard vehicle operating conditions."
    },
    {
      id: "authorization",
      title: "Vehicle Authorization & Diagnostic Testing",
      icon: FileText,
      content: "By reserving a service bay or authorizing work, you grant our certified technicians permission to operate your vehicle on public roads for computerized diagnostics, quality control testing, and final safety bed-in."
    },
    {
      id: "pickup",
      title: "Vehicle Completion & Express Valet Pickup",
      icon: Users,
      content: "Vehicles must be retrieved within 48 hours of service completion notice, unless prior arrangements (such as complimentary valet delivery or extended staging) have been scheduled with your service advisor."
    }
  ];

  const toggleSection = (id) => setActiveSection(activeSection === id ? null : id);

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>HackMob Auto Services Agreement</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Terms of <span className="gold-gradient-text">Service</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Clear, transparent terms designed to protect drivers, guarantee warranty coverage, and ensure complete peace of mind.
        </p>
      </section>

      {/* Accordion list */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        {sections.map((s) => {
          const isActive = activeSection === s.id;
          const Icon = s.icon;
          return (
            <div key={s.id} className="glass-panel rounded-2xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleSection(s.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between text-base sm:text-lg font-bold text-white hover:text-amber-400 transition"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>{s.title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isActive ? "rotate-180 text-amber-400" : ""}`} />
              </button>
              {isActive && (
                <div className="px-6 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/80">
                  {s.content}
                </div>
              )}
            </div>
          );
        })}
      </section>

    </div>
  );
}