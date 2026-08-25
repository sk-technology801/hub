"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Shield, Eye, Lock, Database, Users, Mail, AlertCircle, Sparkles } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "data-collection",
      title: "Vehicle & Personal Data Collection",
      icon: Database,
      content: "We collect information necessary to perform accurate computerized diagnostics and maintenance on your vehicle. This includes your contact details (name, email, phone number) and vehicle identification data (VIN, year, make, model, odometer mileage, diagnostic trouble codes, and service history)."
    },
    {
      id: "data-usage",
      title: "How We Utilize Your Data",
      icon: Eye,
      content: "Your vehicle data is utilized strictly to provide digital vehicle health inspection reports, track maintenance intervals, honor your 24-Month / 24,000-Mile Warranty, and provide transparent upfront pricing. We never sell or monetize customer data."
    },
    {
      id: "security",
      title: "Security & Encryption Protocols",
      icon: Lock,
      content: "All customer records, work orders, and digital inspection photos are stored on encrypted, access-controlled cloud servers complying with modern cybersecurity and privacy standards."
    },
    {
      id: "contact",
      title: "Privacy Inquiries & Data Rights",
      icon: Mail,
      content: "You have full rights to request an export of your complete service history or request deletion of personal records. For inquiries, contact privacy@hackmobauto.com."
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
          <span>HackMob Auto Services Privacy Charter</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Privacy <span className="gold-gradient-text">Policy</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Your privacy and vehicle security are paramount. Learn how we handle your information with 100% transparency.
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