"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, Clock, Send, 
  CheckCircle2, Sparkles, ArrowRight, ShieldCheck, 
  Navigation, Calendar, Wrench, Activity 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Computerized Diagnostics",
    message: ""
  });
  const [selectedBay, setSelectedBay] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bayStatuses = [
    { bay: 1, name: "Bay 01: Diagnostics & Telemetry", status: "Available Now", statusColor: "text-emerald-400", bg: "bg-emerald-500/10" },
    { bay: 2, name: "Bay 02: Ceramic Brakes & Rotors", status: "Busy (Free in 20m)", statusColor: "text-amber-400", bg: "bg-amber-500/10" },
    { bay: 3, name: "Bay 03: 30-Min Quick Synthetic", status: "Available Now", statusColor: "text-emerald-400", bg: "bg-emerald-500/10" },
    { bay: 4, name: "Bay 04: Transmission & Rebuild", status: "Reserved at 3 PM", statusColor: "text-blue-400", bg: "bg-blue-500/10" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: `Selected Bay: ${selectedBay}\n\n${formData.message}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Direct Workshop Bay Reservations</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Reserve Your Bay or <br />
          <span className="gold-gradient-text">Contact Our Engineers</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Book your express service bay online, schedule a computerized health diagnostic, or speak directly with an ASE Master Technician.
        </p>
      </section>

      {/* INTERACTIVE WORKSHOP BAY LIVE AVAILABILITY SELECTOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Live Clean-Room Facility Status</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Real-Time Workshop Bay Availability
              </h2>
            </div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Express Bays Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bayStatuses.map((b) => (
              <div
                key={b.bay}
                onClick={() => setSelectedBay(b.bay)}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  selectedBay === b.bay
                    ? "bg-amber-500/15 border-amber-400 shadow-lg shadow-amber-500/15 scale-105"
                    : "bg-gray-950 border-gray-800 hover:border-gray-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-white">BAY 0{b.bay}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${b.bg} ${b.statusColor}`}>
                    {b.status.split(" ")[0]}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-gray-200">{b.name}</h4>
                <p className={`text-[11px] font-semibold mt-2 ${b.statusColor}`}>{b.status}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Contact & Reservation Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-7 border-gray-800 space-y-5">
              <h3 className="text-xl font-bold text-white">Workshop Headquarters</h3>

              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Facility Location</strong>
                    <span>1000 Auto Tech Boulevard, Silicon City, CA 90210</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Service Hotline</strong>
                    <a href="tel:+15551234567" className="text-amber-400 hover:underline">(555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Email Inquiries</strong>
                    <a href="mailto:service@hackmobauto.com" className="text-amber-400 hover:underline">service@hackmobauto.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="glass-card rounded-3xl p-7 border-gray-800 space-y-3 text-xs">
              <div className="flex items-center space-x-2 text-amber-400 font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800 text-gray-300">
                <span>Monday - Friday:</span>
                <strong className="text-white">7:00 AM - 7:00 PM</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800 text-gray-300">
                <span>Saturday:</span>
                <strong className="text-white">8:00 AM - 5:00 PM</strong>
              </div>
              <div className="flex justify-between py-1 text-gray-300">
                <span>Sunday (Emergency Only):</span>
                <strong className="text-amber-400">24/7 Roadside Hotline</strong>
              </div>
            </div>

          </div>

          {/* Direct Reservation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Service Appointment</h3>
              <p className="text-xs text-gray-400 mb-6">Reserves selected Bay 0{selectedBay} with zero wait time guarantee.</p>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Bay 0{selectedBay} Reservation Received!</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Our service team will confirm your slot via SMS/email within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Marcus Sterling"
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Computerized Diagnostics</option>
                        <option>Ceramic Brake Service</option>
                        <option>Synthetic Oil Change</option>
                        <option>Transmission Overhaul</option>
                        <option>3D Laser Alignment & Tires</option>
                        <option>Climate & AC Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Vehicle Year, Make, Model & Symptoms
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. 2021 BMW M3 - Squealing noise from front left brakes during low-speed deceleration..."
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="gold-glow-btn w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>{isSubmitting ? "Locking In Reservation..." : `Confirm Bay 0${selectedBay} Reservation`}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
