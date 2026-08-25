"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, MapPin, Clock, Mail, Facebook, Twitter, 
  Instagram, Youtube, ArrowRight, Gauge, ShieldCheck, 
  CheckCircle2, Sparkles 
} from "lucide-react";
import SkHubLogo from "./sk-hub-logo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const serviceLinks = [
    { label: "Computerized Engine Diagnostics", href: "/services/engine" },
    { label: "Precision Brake Service & Rotors", href: "/services/brake" },
    { label: "Synthetic Oil & Multi-Point Health", href: "/services/oil-change" },
    { label: "Transmission Flush & Rebuild", href: "/services/transmission" },
    { label: "Performance Tires & 3D Alignment", href: "/services/tire" },
    { label: "Climate Control & AC Overhaul", href: "/services/ac-repair" },
  ];

  const quickLinks = [
    { label: "About SK HUB", href: "/about" },
    { label: "Diagnostic Center", href: "/diagnostic" },
    { label: "Transparent Pricing", href: "/pricing" },
    { label: "Customer Reviews", href: "/testimonials" },
    { label: "Certified Team", href: "/team" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Auto Care Blog", href: "/blog" },
    { label: "Contact & Location", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/term" },
    { label: "Cookie Policy", href: "/cookiepolicy" },
    { label: "Emergency Policy", href: "/emergance" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800/80 relative overflow-hidden">
      
      {/* Top Newsletter Bar */}
      <div className="border-b border-gray-800 bg-gray-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-1">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>SK HUB Drivers Club & Maintenance Insights</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get Exclusive Service Discounts & Seasonal Tips
              </h3>
              <p className="text-sm text-gray-400">
                Join 8,000+ drivers receiving monthly maintenance advice and $25 seasonal coupons.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
              />
              <button
                type="submit"
                className="gold-glow-btn px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 flex-shrink-0"
              >
                {isSubscribed ? (
                  <span className="flex items-center text-black font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-black" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center text-black font-bold">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <SkHubLogo size="lg" />

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Your premier dealership alternative for computerized diagnostics, high-performance tuning, and certified preventative maintenance backed by a 24-month warranty.
            </p>

            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                ASE Certified Masters
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-900 border border-gray-800 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                OEM Certified Parts
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2 pt-2">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "Youtube" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-gray-850 transition"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-amber-400 flex items-center group transition"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-amber-400 flex items-center group transition"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-400/60 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2">
              Workshop Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <span>123 Auto Service St, Tech City, State 12345</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white transition">
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:service@skhubauto.com" className="hover:text-white transition">
                  service@skhubauto.com
                </a>
              </div>

              <div className="flex items-start space-x-3 pt-2 border-t border-gray-800">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Mon - Fri: 8:00 AM - 7:00 PM</p>
                  <p className="text-gray-400">Sat: 8:30 AM - 5:00 PM</p>
                  <p className="text-gray-500 text-xs">Sunday: Emergency On-Call Only</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800/80 bg-black/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SK HUB Auto Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-amber-400 transition">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;