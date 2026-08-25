"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Cookie, Shield, Eye, Settings, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

export default function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const toggleSection = (id) => setActiveSection(activeSection === id ? null : id);

  const cookieTypes = [
    {
      id: "necessary",
      name: "Essential & Security Cookies",
      description: "Required for service booking, encrypted sessions, and digital quote approvals.",
      icon: Shield,
      required: true,
      details: "These cookies are strictly required to ensure secure online reservations, session integrity, and fraud prevention."
    },
    {
      id: "analytics",
      name: "Performance & Diagnostic Telemetry",
      description: "Helps us optimize quote loading speed and error monitoring.",
      icon: Eye,
      required: false,
      details: "Collects anonymized page response metrics and performance insights to continually improve our digital service portal."
    },
    {
      id: "preferences",
      name: "Vehicle Preference Memory",
      description: "Remembers your selected vehicle make/model for faster quote configuration.",
      icon: CheckCircle2,
      required: false,
      details: "Saves your last selected automotive category so you do not have to re-enter vehicle specifics on every visit."
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Cookie & Session Transparency</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Cookie <span className="gold-gradient-text">Policy</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          We use cookies to maintain your digital service estimates, vehicle configuration memory, and session security.
        </p>
      </section>

      {/* Preferences Panel */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        {cookieTypes.map((c) => {
          const isActive = activeSection === c.id;
          const Icon = c.icon;
          return (
            <div key={c.id} className="glass-panel rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{c.name}</h3>
                    <p className="text-xs text-gray-400">{c.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    cookiePreferences[c.id] ? "bg-amber-500/15 text-amber-300 border border-amber-500/30" : "bg-gray-800 text-gray-400"
                  }`}>
                    {c.required ? "Always Enabled" : cookiePreferences[c.id] ? "Enabled" : "Disabled"}
                  </span>
                  <button
                    onClick={() => toggleSection(c.id)}
                    className="p-1.5 text-gray-400 hover:text-white"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? "rotate-180 text-amber-400" : ""}`} />
                  </button>
                </div>
              </div>

              {isActive && (
                <div className="px-6 pb-5 pt-1 text-xs text-gray-300 border-t border-gray-800/80 leading-relaxed">
                  {c.details}
                </div>
              )}
            </div>
          );
        })}
      </section>

    </div>
  );
}