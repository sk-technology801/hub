"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, ChevronDown, Sparkles, Wrench, Clock, 
  DollarSign, ShieldCheck, Phone, Mail, MapPin, 
  ArrowRight, Search, CheckCircle2 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set([0, 1]));
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleItem = (index) => {
    const next = new Set(openItems);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setOpenItems(next);
  };

  const faqs = [
    {
      category: "warranty",
      categoryName: "Warranty & Coverage",
      q: "What warranty do you provide on repairs and replacement parts?",
      a: "All standard repairs and OEM replacement parts installed at HackMob come backed by our comprehensive 24-Month / 24,000-Mile Nationwide Peace of Mind Warranty covering both parts and labor."
    },
    {
      category: "diagnostics",
      categoryName: "Digital Inspections",
      q: "How does your Digital Vehicle Health Inspection report work?",
      a: "Before we touch any bolt, our master technicians perform a multi-point scan and send a transparent digital health report with high-resolution photos, sensor data, and video explanations directly to your smartphone. You approve or decline items with a single tap."
    },
    {
      category: "pricing",
      categoryName: "Pricing & Estimates",
      q: "Are your written estimates 100% price-locked?",
      a: "Yes! We operate on a strict 100% Price Lock Guarantee. We will never charge a single cent over your approved digital estimate. If an unforeseen complication arises, we consult you first before proceeding."
    },
    {
      category: "diagnostics",
      categoryName: "Diagnostics & Telemetry",
      q: "Can you perform dealer-level ECU programming and module scanning?",
      a: "Yes. Our facility is equipped with dealer-grade OBD-II, CAN FD, and DoIP bidirectional scan tools, PicoScopes, and factory software subscriptions for European (BMW, Audi, Mercedes, Porsche), Asian, and Domestic makes."
    },
    {
      category: "appointments",
      categoryName: "Turnaround & Bays",
      q: "Do I need to book in advance or do you accept express walk-ins?",
      a: "Walk-ins are welcomed for express services like synthetic oil changes and emergency tire repairs. However, reserving a service bay online ensures zero wait time and dedicated master technician assignment."
    },
    {
      category: "emergency",
      categoryName: "Emergency & Towing",
      q: "How fast is your 24/7 emergency roadside dispatch?",
      a: "Our GPS-dispatched flatbed towing and mobile roadside units average an arrival response time of 15 to 25 minutes anywhere in the metropolitan service zone."
    }
  ];

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesQuery = searchQuery === "" || 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Knowledge & Maintenance Center</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Frequently Asked <span className="gold-gradient-text">Questions</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Get clear, transparent answers about our workshop warranties, computerized diagnostic tools, pricing guarantees, and turnaround times.
        </p>

        {/* Live Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. warranty, ECU, pricing, walk-in)..."
            className="w-full pl-12 pr-4 py-3.5 bg-gray-950/90 border border-gray-700 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 shadow-xl"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {[
            { id: "all", label: "All Categories" },
            { id: "warranty", label: "Warranties" },
            { id: "diagnostics", label: "Diagnostics" },
            { id: "pricing", label: "Pricing" },
            { id: "emergency", label: "Emergency Dispatch" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
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

      {/* Accordion FAQ List (ZOOM POP) */}
      <MotionZoomPop className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-3xl border-gray-800">
            <p className="text-gray-400 text-sm">No matching questions found for "{searchQuery}".</p>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="mt-3 text-xs font-bold text-amber-400 underline">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openItems.has(idx);
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-gray-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-base sm:text-lg font-bold text-white hover:text-amber-400 transition"
                  >
                    <span className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-amber-400" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/80">
                      <span className="inline-block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                        {item.categoryName}
                      </span>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </MotionZoomPop>

      {/* Still have questions? (3D FLIP UP) */}
      <MotionFlip3D className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
        <div className="glass-card rounded-3xl p-8 border-amber-500/30">
          <h3 className="text-2xl font-bold text-white">Have a Specific Vehicle Question?</h3>
          <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
            Our Master Technicians are available to consult with you by phone or in person at our state-of-the-art garage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="tel:+15551234567" className="gold-glow-btn px-7 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center space-x-2">
              <Phone className="w-4 h-4 text-black" />
              <span>Call (555) 123-4567</span>
            </a>
            <Link href="/contact" className="outline-glow-btn px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm">
              Send Online Inquiry
            </Link>
          </div>
        </div>
      </MotionFlip3D>

    </div>
  );
}