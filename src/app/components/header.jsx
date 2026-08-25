"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, X, Phone, MapPin, Clock, ShieldCheck, 
  Wrench, ChevronDown, Sparkles, ArrowRight, Gauge,
  Disc, Cpu, Settings, Wind, Camera, Users, Star, 
  HelpCircle, AlertTriangle, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'explore' | null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    { title: "Synthetic Oil & Filter", href: "/services/oil-change", desc: "Full synthetic & OEM filter", icon: Wrench, color: "text-amber-400" },
    { title: "Ceramic Brake Service", href: "/services/brake", desc: "Dust-free ceramic & rotor resurfacing", icon: Disc, color: "text-red-400" },
    { title: "Engine Diagnostics", href: "/services/engine", desc: "4-cylinder firing & ECU boost tuning", icon: Cpu, color: "text-yellow-400" },
    { title: "Transmission Overhaul", href: "/services/transmission", desc: "Planetary gear & DCT shift flush", icon: Settings, color: "text-blue-400" },
    { title: "Tires & 3D Alignment", href: "/services/tire", desc: "Hunter laser camber & dynamic balancing", icon: Disc, color: "text-emerald-400" },
    { title: "Climate & AC Repair", href: "/services/ac-repair", desc: "Sub-zero R134a/R1234yf recharge", icon: Wind, color: "text-cyan-400" },
  ];

  const pages = [
    { title: "Project Gallery", href: "/gallery", desc: "Before vs After builds & dyno runs", icon: Camera, color: "text-purple-400" },
    { title: "Master Technicians", href: "/team", desc: "ASE Master Level specialists", icon: Users, color: "text-amber-400" },
    { title: "Verified Reviews", href: "/testimonials", desc: "4.9/5.0 Star verified driver ratings", icon: Star, color: "text-yellow-400" },
    { title: "FAQ Knowledge Base", href: "/faq", desc: "Warranties, OBD-II & price lock answers", icon: HelpCircle, color: "text-emerald-400" },
    { title: "Emergency Dispatch", href: "/emergance", desc: "24/7 GPS roadside flatbed towing", icon: AlertTriangle, color: "text-red-400" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-gray-950/95 border-b border-gray-800/80 text-gray-300 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="tel:+15551234567" 
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>(555) 123-4567</span>
            </a>
            <div className="hidden sm:flex items-center space-x-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>123 Auto Service St, Tech City</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
              <ShieldCheck className="w-3 h-3 mr-1 text-amber-400" />
              ASE Certified Master Techs
            </span>
            <Link 
              href="/emergance" 
              className="hidden sm:inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-1.5" />
              24/7 Roadside
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-gray-950/90 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-3" 
            : "bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo with pulsating halo ring */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all duration-300">
                  <Gauge className="w-6 h-6 text-black" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-amber-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-sans flex items-center">
                  HACK<span className="text-amber-400">MOB</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold -mt-1">
                  Auto Performance & Care
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link 
                href="/" 
                className="px-3 py-2 text-sm font-medium text-amber-400 hover:text-white rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg transition-colors"
              >
                About Us
              </Link>

              {/* SERVICES ANIMATED MEGA DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg inline-flex items-center transition-colors">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${openDropdown === "services" ? "rotate-180 text-amber-400" : "text-gray-400"}`} />
                </button>

                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-950/95 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl p-4 z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 px-3 py-1.5 uppercase tracking-wider border-b border-gray-800">
                        <span>Precision Mechanical Bays</span>
                        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                      </div>
                      
                      <div className="grid grid-cols-1 gap-1.5 mt-2">
                        {services.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <Link 
                              key={item.href}
                              href={item.href} 
                              className="p-2.5 rounded-2xl hover:bg-gray-900 border border-transparent hover:border-amber-500/30 transition-all flex items-center space-x-3 group/item"
                            >
                              <div className={`w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center ${item.color} group-hover/item:scale-110 group-hover/item:border-amber-500/40 transition-transform flex-shrink-0`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-gray-200 group-hover/item:text-amber-400 flex items-center justify-between">
                                  <span>{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-amber-400" />
                                </div>
                                <div className="text-[11px] text-gray-400">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/pricing" 
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="/diagnostic" 
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg transition-colors"
              >
                Diagnostic
              </Link>
              <Link 
                href="/blog" 
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg transition-colors"
              >
                Blog
              </Link>

              {/* EXPLORE ANIMATED MEGA DROPDOWN */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown("explore")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg inline-flex items-center transition-colors">
                  <span>Explore</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${openDropdown === "explore" ? "rotate-180 text-amber-400" : "text-gray-400"}`} />
                </button>

                <AnimatePresence>
                  {openDropdown === "explore" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-950/95 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl p-4 z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 px-3 py-1.5 uppercase tracking-wider border-b border-gray-800">
                        <span>Workshop Hub</span>
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                      </div>

                      <div className="grid grid-cols-1 gap-1.5 mt-2">
                        {pages.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link 
                              key={item.href}
                              href={item.href} 
                              className="p-2.5 rounded-2xl hover:bg-gray-900 border border-transparent hover:border-amber-500/30 transition-all flex items-center space-x-3 group/item"
                            >
                              <div className={`w-8 h-8 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center ${item.color} group-hover/item:scale-110 transition-transform flex-shrink-0`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-bold text-gray-200 group-hover/item:text-amber-400 flex items-center justify-between">
                                  <span>{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-amber-400" />
                                </div>
                                <div className="text-[11px] text-gray-400">{item.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/contact" 
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-amber-400 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link 
                href="/get-quote"
                className="gold-glow-btn px-5 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-black animate-spin" style={{ animationDuration: '6s' }} />
                <span>Get Instant Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-amber-400 hover:bg-gray-800 transition"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-gray-950/98 backdrop-blur-2xl border-b border-amber-500/20 ${
          isMenuOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-6 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-base font-semibold text-amber-400 hover:text-amber-300"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-amber-400"
          >
            About Us
          </Link>

          <div className="border-t border-gray-800 pt-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Our Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-1.5 text-sm text-gray-300 hover:text-amber-400 flex items-center space-x-1.5"
                >
                  <Wrench className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 pt-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 pl-2">
              <Link href="/pricing" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Pricing</Link>
              <Link href="/diagnostic" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Diagnostics</Link>
              <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Gallery</Link>
              <Link href="/team" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Team</Link>
              <Link href="/testimonials" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Reviews</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">FAQ</Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Blog</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="py-1.5 text-sm text-gray-300 hover:text-amber-400">Contact</Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex flex-col gap-3">
            <Link 
              href="/get-quote" 
              onClick={() => setIsMenuOpen(false)}
              className="gold-glow-btn w-full py-3 rounded-xl text-center text-sm font-bold flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Get Free Estimate</span>
            </Link>
            <a
              href="tel:+15551234567"
              className="outline-glow-btn w-full py-2.5 rounded-xl text-center text-sm font-semibold flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Hotline (555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
