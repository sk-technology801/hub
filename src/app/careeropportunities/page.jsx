"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Car, Users, Trophy, Star, MapPin, 
  Clock, DollarSign, ArrowRight, Sparkles, Wrench, ShieldCheck 
} from "lucide-react";

export default function CareerOpportunitiesPage() {
  const [activeJob, setActiveJob] = useState(0);

  const jobPositions = [
    {
      title: "Master Automotive Diagnostic Technician",
      department: "Diagnostic & ECU Engineering",
      location: "Silicon City Workshop",
      type: "Full-time",
      salary: "$95,000 - $130,000 / yr + Performance Bonus",
      description: "Lead dealer-grade computerized scanning, oscilloscope telemetry analysis, and complex engine/electrical troubleshooting on European and performance platforms.",
      requirements: [
        "ASE Master Certified (A1-A8) or OEM Master Equivalent",
        "5+ years advanced diagnostics experience",
        "Proficiency with PicoScope, CAN FD, and bidirectional scanners"
      ]
    },
    {
      title: "Lead Transmission & Drivetrain Specialist",
      department: "Mechanical Drivetrain",
      location: "Silicon City Workshop",
      type: "Full-time",
      salary: "$80,000 - $115,000 / yr",
      description: "Perform precision overhauls, clutch pack replacements, and hydraulic calibrations on Dual-Clutch (DCT), Automatic, and manual gearboxes.",
      requirements: [
        "Specialized training in automatic & dual-clutch transmission rebuilds",
        "3+ years transmission overhaul experience",
        "High attention to mechanical tolerances and dyno bed-in"
      ]
    },
    {
      title: "Service Advisor & Customer Experience Lead",
      department: "Service Operations",
      location: "Silicon City Customer Lounge",
      type: "Full-time",
      salary: "$65,000 - $95,000 / yr + Commission",
      description: "Deliver exceptional transparency to drivers by presenting digital inspection reports, coordinating work orders, and ensuring complete customer delight.",
      requirements: [
        "Proven background in automotive service writing",
        "Excellent communication and digital inspection workflow skills",
        "Passion for customer satisfaction and honest recommendations"
      ]
    }
  ];

  const benefits = [
    { icon: Trophy, title: "Top-Tier Compensation", desc: "Industry-leading base pay with weekly productivity bonuses." },
    { icon: Star, title: "Paid Master Training", desc: "100% company-funded ASE, EV & OEM factory certifications." },
    { icon: Users, title: "State-of-the-Art Bays", desc: "Air-conditioned workshop with new Hunter & Snap-on equipment." },
    { icon: Car, title: "Health, 401(k) & Discounts", desc: "Comprehensive medical, 401(k) match, and free vehicle parts/labor." }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Join the HackMob Master Engineering Team</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Accelerate Your <span className="gold-gradient-text">Automotive Career</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Work alongside the city's finest ASE Master Technicians in an air-conditioned, cutting-edge facility with industry-leading pay and company-funded factory certifications.
        </p>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border-gray-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4 text-amber-400">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Available Roles</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Current Open Positions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Job List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {jobPositions.map((job, idx) => (
              <div
                key={idx}
                onClick={() => setActiveJob(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  activeJob === idx
                    ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-500/10"
                    : "bg-gray-950/80 border-gray-800 hover:border-gray-700"
                }`}
              >
                <h3 className={`text-sm font-bold ${activeJob === idx ? "text-amber-300" : "text-white"}`}>
                  {job.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{job.department}</p>
                <span className="inline-block mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
                  {job.type}
                </span>
              </div>
            ))}
          </div>

          {/* Job Details Box (8 cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-3xl p-8 border-gray-800 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {jobPositions[activeJob].department}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {jobPositions[activeJob].title}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs text-gray-300 mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {jobPositions[activeJob].location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {jobPositions[activeJob].type}
                  </span>
                  <span className="flex items-center gap-1 text-amber-300 font-bold">
                    <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                    {jobPositions[activeJob].salary}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">Role Overview</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {jobPositions[activeJob].description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white mb-2">Key Qualifications</h4>
                <ul className="space-y-2">
                  {jobPositions[activeJob].requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start text-xs sm:text-sm text-gray-300 space-x-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2"
                >
                  <span>Apply for This Role</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
                <a
                  href="mailto:careers@hackmobauto.com"
                  className="outline-glow-btn px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm"
                >
                  Send Resume Directly
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}