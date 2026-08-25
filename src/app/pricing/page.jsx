"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, ShieldCheck, Zap, Sparkles, ArrowRight, 
  Phone, DollarSign, Award, Sliders, CheckCircle2 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [annualMiles, setAnnualMiles] = useState(12000);

  const calculatedOilServices = Math.ceil(annualMiles / 6000);
  const estimatedDealerCost = Math.round(calculatedOilServices * 140 + 280);
  const hackmobMemberCost = Math.round(calculatedOilServices * 79 + 140);
  const annualSavings = estimatedDealerCost - hackmobMemberCost;

  const plans = [
    {
      name: "Essential Care Pass",
      tagline: "Ideal for daily commuters & standard Asian/Domestic vehicles",
      price: billingCycle === "annual" ? "$19" : "$29",
      period: billingCycle === "annual" ? "/ month (billed annually)" : "/ single service",
      features: [
        "2x Full Synthetic Oil & Filter Changes / yr",
        "50-Point Digital Video Health Inspections",
        "Free Tire Rotations & Pressure Checks",
        "Top-off all essential under-hood fluids",
        "15% Discount on all mechanical labor",
        "12-Month Nationwide Warranty"
      ],
      popular: false
    },
    {
      name: "Master Performance Club",
      tagline: "Our most popular tier for German luxury & high-mileage drivers",
      price: billingCycle === "annual" ? "$39" : "$59",
      period: billingCycle === "annual" ? "/ month (billed annually)" : "/ single service",
      features: [
        "3x Euro / Full Synthetic Liqui Moly Services / yr",
        "Unlimited Computerized Diagnostic Scans (OBD-II)",
        "Free 3D Laser Wheel Alignment Check",
        "Priority Bay Reservation (Zero Wait Time)",
        "Complimentary Valet Vehicle Pickup & Wash",
        "20% Discount on all parts & labor",
        "24-Month / 24,000-Mile Nationwide Warranty"
      ],
      popular: true
    },
    {
      name: "Apex Track & Fleet Elite",
      tagline: "Dedicated to track day cars, supercars & commercial fleets",
      price: billingCycle === "annual" ? "$79" : "$119",
      period: billingCycle === "annual" ? "/ month (billed annually)" : "/ single service",
      features: [
        "Unlimited High-Performance Motul/300V Services",
        "Chassis Dynamometer Horsepower Verification",
        "Brembo Brake Bleed & High-Temp Racing Fluid",
        "24/7 Dedicated Master Technician VIP Direct Line",
        "Free Emergency Flatbed Towing (Metropolitan)",
        "36-Month Nationwide Extended Warranty"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>100% Price-Locked Maintenance Packages</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Transparent Care, <br />
          <span className="gold-gradient-text">Zero Dealership Markups</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          No hidden fees or unexpected labor charges. Choose a transparent single service pass or save up to 40% annually with our Master Performance Club.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setBillingCycle("per_visit")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              billingCycle === "per_visit"
                ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                : "bg-gray-900 border border-gray-800 text-gray-300"
            }`}
          >
            Pay Per Service
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
              billingCycle === "annual"
                ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                : "bg-gray-900 border border-gray-800 text-gray-300"
            }`}
          >
            <span>Annual Membership</span>
            <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded-full font-black">
              Save 35%
            </span>
          </button>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE ANNUAL MAINTENANCE SAVINGS CALCULATOR (ZOOM POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>Dealership vs. HackMob Cost Comparison</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Annual Driver Mileage & Savings Calculator
              </h2>
            </div>
            <div className="bg-emerald-500/10 text-emerald-400 font-extrabold text-sm px-3.5 py-1.5 rounded-xl border border-emerald-500/20">
              Estimated Savings: ${annualSavings} / Year
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-gray-300 font-semibold">Your Annual Driving Mileage:</span>
                  <strong className="text-amber-400 font-bold text-sm">{annualMiles.toLocaleString()} Miles / Yr</strong>
                </div>
                <input
                  type="range"
                  min="4000"
                  max="25000"
                  step="1000"
                  value={annualMiles}
                  onChange={(e) => setAnnualMiles(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-950 p-4 rounded-xl border border-red-950/60 text-center">
                  <div className="text-xs text-gray-400 uppercase font-bold">Standard Dealership Est.</div>
                  <div className="text-2xl sm:text-3xl font-black text-red-400 mt-1">${estimatedDealerCost}</div>
                  <div className="text-[11px] text-gray-400 mt-1">High markup & diagnostic fees</div>
                </div>

                <div className="bg-gray-950 p-4 rounded-xl border border-emerald-950/60 text-center">
                  <div className="text-xs text-gray-400 uppercase font-bold">HackMob Membership</div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">${hackmobMemberCost}</div>
                  <div className="text-[11px] text-emerald-300 mt-1">Full OEM parts & 2-yr warranty</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-950 p-5 rounded-2xl border border-gray-800 space-y-3 text-xs">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Included in Your Annual Calculation
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Synthetic Service Cycles:</span>
                <strong className="text-white">{calculatedOilServices}x Visits Included</strong>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Free Digital Inspections:</span>
                <strong className="text-white">Unlimited ($240 Value)</strong>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Nationwide Warranty:</span>
                <strong className="text-amber-400">24-Mo / 24,000-Mile</strong>
              </div>
              <Link href="/get-quote" className="gold-glow-btn w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 mt-2">
                <span>Lock In This Annual Rate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* Pricing Plans Grid (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <MotionStaggerItem
              key={idx}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular ? "border-amber-400/80 shadow-2xl shadow-amber-500/20 scale-105" : "border-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-6">{plan.tagline}</p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-amber-400">{plan.price}</span>
                  <span className="text-xs text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-3 border-t border-gray-800 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs sm:text-sm text-gray-300 space-x-2.5">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link
                  href={`/get-quote?plan=${encodeURIComponent(plan.name)}`}
                  className={`w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition ${
                    plan.popular ? "gold-glow-btn" : "bg-gray-800 hover:bg-amber-500 hover:text-black text-gray-200"
                  }`}
                >
                  <span>Select {plan.name.split(" ")[0]} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </section>

    </div>
  );
}