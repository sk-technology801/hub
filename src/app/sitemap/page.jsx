"use client";
import React from "react";
import Link from "next/link";
import { 
  Home, Wrench, Shield, DollarSign, Users, 
  MapPin, Sparkles, ArrowRight, FileText 
} from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Service Bays",
      links: [
        { name: "Computerized Engine Diagnostics", href: "/services/engine" },
        { name: "Ceramic Brake Service & Rotors", href: "/services/brake" },
        { name: "Synthetic Oil & Multi-Point Inspection", href: "/services/oil-change" },
        { name: "Transmission Overhaul & Flushes", href: "/services/transmission" },
        { name: "3D Laser Wheel Alignment & Tires", href: "/services/tire" },
        { name: "Climate Control & AC Service", href: "/services/ac-repair" }
      ]
    },
    {
      title: "Client Portals & Estimators",
      links: [
        { name: "Instant Repair Price Estimator", href: "/get-quote" },
        { name: "Diagnostic Center Reservation", href: "/diagnostic" },
        { name: "Transparent Package Pricing", href: "/pricing" },
        { name: "24/7 Emergency Dispatch Hotline", href: "/emergance" },
        { name: "Contact & Workshop Location", href: "/contact" }
      ]
    },
    {
      title: "Company & Knowledge",
      links: [
        { name: "About HackMob Auto Services", href: "/about" },
        { name: "Master Engineering Team", href: "/team" },
        { name: "Verified Customer Reviews", href: "/testimonials" },
        { name: "Workshop Project Gallery", href: "/gallery" },
        { name: "Auto Insights & Maintenance Blog", href: "/blog" },
        { name: "Frequently Asked Questions", href: "/faq" },
        { name: "Career Opportunities", href: "/careeropportunities" }
      ]
    },
    {
      title: "Legal & Warranties",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service & 24-Mo Warranty", href: "/term" },
        { name: "Cookie & Session Policy", href: "/cookiepolicy" }
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Full Site Directory</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Website <span className="gold-gradient-text">Sitemap</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Easily navigate every service bay, instant pricing estimator, workshop guide, and legal policy.
        </p>
      </section>

      {/* Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-7 border-gray-800">
              <h3 className="text-base font-bold text-amber-400 border-b border-gray-800 pb-3 mb-4">
                {sec.title}
              </h3>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-300 hover:text-amber-400 flex items-center group transition"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}