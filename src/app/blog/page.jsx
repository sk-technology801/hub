"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, Calendar, User, Clock, ArrowUp, 
  Sparkles, Wrench, ArrowRight 
} from "lucide-react";

export default function BlogPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const blogPosts = [
    {
      id: 1,
      title: "Master Guide: Why Check Engine Lights Flash & What To Do",
      excerpt: "Understand the difference between solid vs blinking CELs, catalytic converter protection, and instant diagnostic steps.",
      author: "Marcus Vance",
      date: "August 2026",
      readTime: "6 min read",
      category: "Diagnostics"
    },
    {
      id: 2,
      title: "Ceramic vs Semi-Metallic Brake Pads: Track & Street Analysis",
      excerpt: "Deep dive into rotor heat dissipation, brake dust levels, cold bite friction, and longevity comparisons.",
      author: "Sophia Martinez",
      date: "August 2026",
      readTime: "8 min read",
      category: "Brakes"
    },
    {
      id: 3,
      title: "Full Synthetic vs Euro-Blend: When 5,000-Mile Intervals Matter",
      excerpt: "Direct injection carbon buildup, turbocharger journal bearing thermal breakdown, and oil viscosity ratings.",
      author: "Elena Rostova",
      date: "July 2026",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 4,
      title: "Dual-Clutch Transmission (DCT/DSG) Care & Fluid Intervals",
      excerpt: "How hydraulic mechatronic units wear out and why precision fluid flushes prevent costly multi-thousand dollar rebuilds.",
      author: "David Sterling",
      date: "July 2026",
      readTime: "7 min read",
      category: "Transmission"
    }
  ];

  const categories = ["All", "Diagnostics", "Brakes", "Maintenance", "Transmission"];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Automotive Engineering Insights</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          HackMob <span className="gold-gradient-text">Auto Insights</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Expert automotive repair guides, preventative maintenance checklists, and performance diagnostics written by our ASE Master Technicians.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                  : "bg-gray-900 border border-gray-800 text-gray-300 hover:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-gray-800 hover:border-amber-500/40 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  By <span className="text-gray-200 font-semibold">{post.author}</span> • {post.date}
                </div>
                <Link
                  href="/get-quote"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
