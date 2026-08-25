"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, Activity, Zap, CheckCircle2, ShieldCheck, 
  Sparkles, ArrowRight, Phone, Clock, AlertTriangle, 
  Play, Pause, RotateCcw, Sliders, Radio, Terminal 
} from "lucide-react";
import { 
  MotionFadeUp, MotionSlideLeft, MotionSlideRight, 
  MotionZoomPop, MotionFlip3D, MotionStaggerContainer, 
  MotionStaggerItem 
} from "../components/motion-wrapper";

export default function DiagnosticPage() {
  const [activeSensor, setActiveSensor] = useState("o2");
  const [isScopeRunning, setIsScopeRunning] = useState(true);
  const [simulatedDtc, setSimulatedDtc] = useState("P0171: Fuel Trim System Lean (Bank 1)");
  const [isCleared, setIsCleared] = useState(false);

  const sensorConfigs = {
    o2: {
      name: "Upstream Oxygen Sensor (O2 Lamda)",
      voltage: "0.1V - 0.9V Rapid Switching",
      frequency: "1.2 Hz (Closed Loop)",
      status: "Optimal Stoichiometric (14.7:1)",
      color: "#f59e0b"
    },
    ckp: {
      name: "Crankshaft Position Sensor (58X Reluctor)",
      voltage: "5.0V Square Hall Effect",
      frequency: "58 Pulses / Rev",
      status: "Synced with Camshaft (Zero Drift)",
      color: "#10b981"
    },
    injector: {
      name: "Direct Injector Pulse Width & Inductive Spike",
      voltage: "65V High-Pressure Piezo Spike",
      frequency: "2.4ms Injection Duration",
      status: "Crisp Solenoid Snubbing",
      color: "#06b6d4"
    },
    canbus: {
      name: "High-Speed CAN Bus Differential (CAN-H / CAN-L)",
      voltage: "2.5V Base / 3.5V Peak",
      frequency: "500 kbps Baud Rate",
      status: "Zero Bus-Off Errors Detected",
      color: "#ec4899"
    }
  };

  const currentSensor = sensorConfigs[activeSensor];

  const packages = [
    {
      title: "Standard OBD-II Multi-System Scan",
      price: "$89",
      time: "30-45 mins",
      desc: "Full DTC fault retrieval across Engine, Transmission, ABS, and SRS Airbag modules.",
      features: [
        "Complete ECM, TCM, BCM, and ABS error report",
        "Freeze frame data recording",
        "Emissions readiness monitor check",
        "Digital health report sent to phone"
      ]
    },
    {
      title: "Advanced Oscilloscope & CAN Telemetry",
      price: "$149",
      time: "1-2 hours",
      desc: "Deep component wave-form analysis, sensor voltage scoping, and wiring harness resistance test.",
      features: [
        "PicoScope 4-channel live sensor graphing",
        "Bidirectional actuation testing (fuel pumps, solenoids)",
        "Parasitic electrical battery drain testing",
        "Master Technician written diagnosis"
      ]
    },
    {
      title: "EV / Hybrid High-Voltage Diagnostics",
      price: "$199",
      time: "2-3 hours",
      desc: "Specialized high-voltage battery cell balance, inverter insulation, and thermal loop analysis.",
      features: [
        "Individual battery cell delta-V measurement",
        "Inverter & DC-DC converter diagnostics",
        "Regenerative braking module calibration",
        "High-voltage safety lock-out inspection"
      ]
    }
  ];

  return (
    <div className="bg-[#080c14] text-gray-100 min-h-screen pt-32 sm:pt-36 pb-20 overflow-hidden">
      
      {/* Hero Section (FADE UP) */}
      <MotionFadeUp className="relative px-4 sm:px-6 lg:px-8 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Dealer-Grade Oscilloscope & ECU Telemetry</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Computerized Vehicle <br />
          <span className="gold-gradient-text">Diagnostics & Sensor Scoping</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Pinpoint elusive electrical faults, misfires, and sensor glitches with microsecond precision using our 4-channel PicoScopes and OEM-level bidirectional scanners.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/get-quote?service=diagnostic" className="gold-glow-btn px-8 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-black" />
            <span>Book Diagnostic Session</span>
          </Link>
          <a href="tel:+15551234567" className="outline-glow-btn px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </MotionFadeUp>

      {/* INTERACTIVE OSCILLOSCOPE SIMULATOR (ZOOM IN POP) */}
      <MotionZoomPop className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-amber-500/30 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Live Digital PicoScope 4-Channel HUD</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Real-Time Sensor Waveform & CAN Telemetry
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-gray-950 p-1.5 rounded-2xl border border-gray-800 text-xs">
              {[
                { id: "o2", label: "O2 Oxygen Sensor" },
                { id: "ckp", label: "Crankshaft 58X" },
                { id: "injector", label: "Fuel Injector" },
                { id: "canbus", label: "CAN-H / CAN-L" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSensor(tab.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition ${
                    activeSensor === tab.id
                      ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Oscilloscope Grid Screen */}
            <div className="lg:col-span-7 relative h-72 rounded-2xl bg-black border-2 border-gray-800 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="relative z-10 flex justify-between items-center text-[11px] font-mono">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5" />
                  CH1: 200mV/div • 50ms/div
                </span>
                <span className="text-amber-400 font-bold">500 kS/s Sample Rate</span>
              </div>

              {/* Dynamic Animated Waveform */}
              <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {activeSensor === "o2" && (
                    <path
                      d="M 0,50 Q 50,10 100,50 T 200,50 T 300,50 T 400,50"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeDasharray="400"
                      strokeDashoffset={isScopeRunning ? "0" : "100"}
                      className={isScopeRunning ? "animate-pulse" : ""}
                    />
                  )}
                  {activeSensor === "ckp" && (
                    <path
                      d="M 0,80 L 20,80 L 20,20 L 40,20 L 40,80 L 60,80 L 60,20 L 80,20 L 80,80 L 120,80 L 120,20 L 140,20 L 140,80 L 180,80 L 180,20 L 200,20 L 200,80 L 240,80 L 240,20 L 260,20 L 260,80 L 300,80 L 300,20 L 320,20 L 320,80 L 360,80 L 360,20 L 380,20 L 380,80 L 400,80"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                  )}
                  {activeSensor === "injector" && (
                    <path
                      d="M 0,70 L 100,70 L 100,20 L 105,95 L 120,70 L 250,70 L 250,20 L 255,95 L 270,70 L 400,70"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="3"
                    />
                  )}
                  {activeSensor === "canbus" && (
                    <>
                      <path d="M 0,40 L 40,40 L 40,20 L 80,20 L 80,40 L 120,40 L 120,20 L 180,20 L 180,40 L 400,40" fill="none" stroke="#ec4899" strokeWidth="2" />
                      <path d="M 0,60 L 40,60 L 40,80 L 80,80 L 80,60 L 120,60 L 120,80 L 180,80 L 180,60 L 400,60" fill="none" stroke="#a855f7" strokeWidth="2" />
                    </>
                  )}
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-center bg-gray-950/90 px-3 py-1.5 rounded-xl border border-gray-800 text-xs font-mono">
                <span className="text-gray-300">
                  Peak-to-Peak: <strong className="text-white">{currentSensor.voltage}</strong>
                </span>
                <span className="text-gray-300">
                  Frequency: <strong className="text-amber-400">{currentSensor.frequency}</strong>
                </span>
              </div>

            </div>

            {/* Diagnostic Scanner */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs border-b border-gray-800 pb-2">
                  <span className="text-gray-400 flex items-center gap-1 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    OBD-II DTC Scanner
                  </span>
                  <span className="text-[11px] font-bold text-amber-400">ECU Live Link</span>
                </div>

                <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 text-xs">
                  <div className="text-gray-400 text-[10px] uppercase font-bold">Stored Trouble Code</div>
                  <div className={`font-mono font-bold mt-1 ${isCleared ? "text-emerald-400" : "text-red-400"}`}>
                    {isCleared ? "✅ System Clear: 0 DTCs Present" : simulatedDtc}
                  </div>
                </div>

                <div className="text-xs text-gray-300 space-y-1">
                  <div>Sensor Health: <strong className="text-white">{currentSensor.status}</strong></div>
                  <div>Bus Voltage: <strong className="text-amber-400">13.8V Alternator Stable</strong></div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsScopeRunning(!isScopeRunning)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition"
                >
                  {isScopeRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{isScopeRunning ? "Freeze Scope" : "Live Capture"}</span>
                </button>

                <button
                  onClick={() => setIsCleared(!isCleared)}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold flex items-center justify-center gap-1.5 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isCleared ? "Inject Test Fault" : "Clear DTC Code"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </MotionZoomPop>

      {/* Diagnostic Service Packages (STAGGERED CONTAINER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <MotionStaggerItem key={idx} className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-gray-800 hover:border-amber-400/50 group">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400">{pkg.price}</span>
                  <span className="text-xs text-gray-400">/ est. {pkg.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <ul className="space-y-2.5 border-t border-gray-800 pt-4">
                  {pkg.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs sm:text-sm text-gray-300 space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <Link
                  href={`/get-quote?service=${encodeURIComponent(pkg.title)}`}
                  className="gold-glow-btn w-full py-3.5 rounded-xl text-center text-xs sm:text-sm font-bold flex items-center justify-center space-x-2"
                >
                  <span>Book Diagnostic Bay</span>
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
