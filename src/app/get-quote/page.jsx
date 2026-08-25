"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, CheckCircle2, ShieldCheck, Sparkles, 
  ArrowRight, Phone, Wrench, Disc, Settings, 
  Wind, BatteryCharging, DollarSign, Activity, Check 
} from "lucide-react";

export default function GetQuotePage() {
  const [vehicleMake, setVehicleMake] = useState("porsche");
  const [vehicleYear, setVehicleYear] = useState("2022");
  
  // Selected repair items
  const [selectedItems, setSelectedItems] = useState({
    diagnostics: true,
    brakes: false,
    oil: true,
    transmission: false,
    ac: false,
    alignment: false
  });

  const [addValet, setAddValet] = useState(false);
  const [addDetailing, setAddDetailing] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const repairItems = [
    { id: "diagnostics", name: "Computerized OBD-II & CAN Scan", basePrice: 89, icon: Activity },
    { id: "oil", name: "Full Synthetic Motor Oil & Filter", basePrice: 69, icon: Wrench },
    { id: "brakes", name: "Ceramic Brake Pads & Rotor Truing", basePrice: 149, icon: Disc },
    { id: "transmission", name: "Transmission Fluid Exchange", basePrice: 169, icon: Settings },
    { id: "ac", name: "AC Evac & Refrigerant Recharge", basePrice: 119, icon: Wind },
    { id: "alignment", name: "3D Laser 4-Wheel Alignment", basePrice: 79, icon: CheckCircle2 }
  ];

  const makeMultipliers = {
    porsche: 1.45,
    bmw: 1.35,
    audi: 1.35,
    mercedes: 1.40,
    lexus: 1.15,
    toyota: 1.00,
    ford: 1.00,
    honda: 1.00
  };

  const multiplier = makeMultipliers[vehicleMake] || 1.0;

  // Calculate live total
  let subtotal = 0;
  repairItems.forEach((item) => {
    if (selectedItems[item.id]) {
      subtotal += Math.round(item.basePrice * multiplier);
    }
  });

  if (addValet) subtotal += 35;
  if (addDetailing) subtotal += 45;

  const toggleItem = (id) => {
    setSelectedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>100% Price Lock Guarantee</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Instant Auto Repair <br />
          <span className="gold-gradient-text">Cost Estimator</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Configure your vehicle specifics, select required service items, and receive an instant price-locked estimate backed by our 24-Month Warranty.
        </p>
      </section>

      {/* INTERACTIVE MULTI-COMPONENT ESTIMATOR BENCH */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-gray-800 space-y-6">
              
              {/* Step 1: Vehicle Make & Year */}
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Step 1: Vehicle Specifications
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "porsche", name: "Porsche" },
                    { id: "bmw", name: "BMW" },
                    { id: "mercedes", name: "Mercedes" },
                    { id: "audi", name: "Audi" },
                    { id: "lexus", name: "Lexus" },
                    { id: "toyota", name: "Toyota" },
                    { id: "ford", name: "Ford" },
                    { id: "honda", name: "Honda" }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setVehicleMake(m.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                        vehicleMake === m.id
                          ? "bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20"
                          : "bg-gray-950 border-gray-800 text-gray-300 hover:border-gray-700"
                      }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Component Services */}
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Step 2: Select Service Modules
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {repairItems.map((item) => {
                    const isSelected = selectedItems[item.id];
                    const dynamicPrice = Math.round(item.basePrice * multiplier);
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                          isSelected
                            ? "bg-amber-500/15 border-amber-400 shadow-md shadow-amber-500/10"
                            : "bg-gray-950 border-gray-800 hover:border-gray-700"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            isSelected ? "bg-amber-500 text-black" : "bg-gray-800 text-gray-400"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-gray-300"}`}>
                              {item.name}
                            </div>
                            <div className="text-[11px] text-amber-400 font-semibold">${dynamicPrice}</div>
                          </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? "bg-amber-400 border-amber-400 text-black" : "border-gray-700"
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Express Convenience Add-ons */}
              <div>
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Step 3: Convenience Add-ons
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setAddValet(!addValet)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                      addValet ? "bg-amber-500/15 border-amber-400" : "bg-gray-950 border-gray-800"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">Local Doorstep Valet Pickup</div>
                      <div className="text-[10px] text-gray-400">+$35 flat rate</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border ${addValet ? "bg-amber-400 border-amber-400" : "border-gray-700"}`} />
                  </div>

                  <div
                    onClick={() => setAddDetailing(!addDetailing)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                      addDetailing ? "bg-amber-500/15 border-amber-400" : "bg-gray-950 border-gray-800"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white">Clean-Room Hand Wash & Vacuum</div>
                      <div className="text-[10px] text-gray-400">+$45 flat rate</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border ${addDetailing ? "bg-amber-400 border-amber-400" : "border-gray-700"}`} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Live Estimate Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-36">
            <div className="glass-card rounded-3xl p-7 border-amber-500/40 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Estimate Summary
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  100% Price Lock
                </span>
              </div>

              {/* Total Price Display */}
              <div className="text-center py-2">
                <span className="text-xs text-gray-400 uppercase font-semibold">Total Estimated Price</span>
                <div className="text-5xl font-black text-amber-400 mt-1">
                  ${subtotal}
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Includes full certified labor, OEM parts & 24-Mo warranty.
                </p>
              </div>

              {/* Line items preview */}
              <div className="bg-gray-950 p-4 rounded-2xl border border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Selected Vehicle Platform:</span>
                  <strong className="text-white capitalize">{vehicleMake} Performance</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Digital Health Inspection:</span>
                  <strong className="text-emerald-400">FREE ($120 Value)</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Nationwide Warranty:</span>
                  <strong className="text-amber-400">24-Mo / 24,000-Mile</strong>
                </div>
              </div>

              {isReserved ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Estimate Locked at ${subtotal}!</h4>
                  <p className="text-[11px] text-gray-400">Our service bay team has been notified.</p>
                </div>
              ) : (
                <button
                  onClick={() => setIsReserved(true)}
                  className="gold-glow-btn w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Lock In Price & Reserve Bay</span>
                </button>
              )}

              <div className="text-center">
                <a href="tel:+15551234567" className="text-xs text-amber-400 hover:underline flex items-center justify-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Questions? Call (555) 123-4567</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}