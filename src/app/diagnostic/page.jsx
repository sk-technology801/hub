"use client";
import React, { useState, useEffect } from "react";
import {
  Car,
  Wrench,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

const CarDiagnosticPage = () => {
  /* ------------------------ state ------------------------ */
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [bookingStep, setBookingStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    issue: "",
    preferredDate: "",
    preferredTime: "",
  });

  /* --------------------- auto‑animations ------------------ */
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(
      () => setCurrentTestimonial((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  /* ------------------------ data ------------------------- */
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Engine Diagnostics",
      description: "Complete engine analysis using advanced diagnostic tools",
      features: [
        "OBD-II Scanning",
        "Error Code Reading",
        "Performance Testing",
        "Emissions Check",
      ],
      price: "FREE",
      duration: "30‑45 min",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Transmission Check",
      description: "Comprehensive transmission system evaluation",
      features: [
        "Fluid Analysis",
        "Shift Pattern Test",
        "Leak Detection",
        "Torque Converter Test",
      ],
      price: "FREE",
      duration: "20‑30 min",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical System",
      description: "Full electrical system diagnosis and testing",
      features: [
        "Battery Test",
        "Alternator Check",
        "Wiring Inspection",
        "Starter Analysis",
      ],
      price: "FREE",
      duration: "25‑35 min",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Inspection",
      description: "Complete safety system evaluation",
      features: [
        "Brake System",
        "Steering Check",
        "Suspension Test",
        "Tire Analysis",
      ],
      price: "FREE",
      duration: "40‑50 min",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! Found my car's issue in minutes. Saved me hundreds of dollars.",
      location: "New York, NY",
      carModel: "Honda Civic 2019",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional team, quick diagnosis, and honest pricing. Highly recommend!",
      location: "Los Angeles, CA",
      carModel: "Toyota Camry 2020",
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "Free diagnostic saved me from a costly mistake. These guys are trustworthy.",
      location: "Chicago, IL",
      carModel: "Ford F‑150 2018",
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Excellent customer service and thorough diagnosis. Will definitely return!",
      location: "Houston, TX",
      carModel: "BMW 3 Series 2021",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Cars Diagnosed", icon: <Car className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ];

  /* -------------------- handlers ------------------------- */
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBookingNext = () => bookingStep < 2 && setBookingStep(bookingStep + 1);

  const handleBookingSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: "Car Diagnostic Booking",
          message: `Car: ${formData.carModel}\nIssue: ${formData.issue}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}`,
        }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        alert(`Error: ${error || "Failed to submit booking"}`);
        return;
      }

      alert("Booking submitted! We'll contact you shortly.");
      setBookingStep(0);
      setFormData({
        name: "",
        phone: "",
        email: "",
        carModel: "",
        issue: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (err) {
      console.error("Booking error:", err);
      alert("Something went wrong — please try again later.");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------ ui --------------------------- */
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ---------- Hero ---------- */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50" />
        {/* animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div
                key={i}
                className="border-r border-yellow-400 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center bg-yellow-400/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold">
                  Trusted by 50,000+ customers
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">FREE</span>
                <br />
                Car Diagnostic
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
                Professional automotive diagnostics at no cost. Get your car checked
                by certified technicians using state‑of‑the‑art equipment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setBookingStep(1)}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Diagnostic</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a href="/contact">
                  <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    <Phone className="w-5 h-5 inline mr-2" />
                    Call Now
                  </button>
                </a>
              </div>

              {/* quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-yellow-400 mb-1">{s.icon}</div>
                    <div className="text-2xl font-bold">{s.number}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: quick quote */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-1">
                  <div className="bg-gray-900 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Quick Quote</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
                      />
                      <input
                        type="text"
                        placeholder="Car Model & Year"
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none text-white"
                      />
                      <textarea
                        placeholder="Describe the issue..."
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none text-white h-24"
                      />
                      <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                        Get Free Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Diagnostic</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automotive diagnostics using the latest technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden ${
                  activeService === i ? "ring-4 ring-yellow-400" : ""
                }`}
                onMouseEnter={() => setActiveService(i)}
              >
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {s.price}
                </div>

                <div className="text-yellow-400 mb-4 transform transition-transform duration-300 hover:scale-110">
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{s.duration}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  onClick={() => setBookingStep(1)}
                >
                  Book This Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section id="about" className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">AutoDiag&nbsp;Pro</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another auto shop. We're your trusted automotive partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* cards */}
            {[
              {
                icon: <Users className="w-10 h-10 text-black" />,
                title: "Expert Technicians",
                desc: "ASE‑certified techs with 15+ years experience",
                tags: ["ASE Certified", "15+ Years"],
              },
              {
                icon: <Zap className="w-10 h-10 text-black" />,
                title: "Advanced Equipment",
                desc: "State‑of‑the‑art diagnostic tools",
                tags: ["OBD-II", "Latest Tech"],
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-black" />,
                title: "100% Free",
                desc: "No hidden fees, completely free diagnostic",
                tags: ["No Hidden Fees", "Guaranteed"],
              },
            ].map(({ icon, title, desc, tags }, i) => (
              <div
                key={i}
                className="text-center p-8 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 mb-4">{desc}</p>
                <div className="flex justify-center space-x-2">
                  {tags.map((t) => (
                    <span key={t} className="bg-yellow-400 text-black px-2 py-1 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-yellow-400">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real customers</p>
          </div>

          {/* featured testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 italic font-light">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].carModel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* nav dots */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? "bg-yellow-400" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm italic">"{t.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Your Car Diagnosed?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Book your free diagnostic appointment today. No strings attached, no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              onClick={() => setBookingStep(1)}
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Now</span>
            </button>
            <a href="/contact">
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Booking Modal ---------- */}
      {bookingStep > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Book Your Free Diagnostic</h3>
              <button onClick={() => setBookingStep(0)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* step indicator */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      s <= bookingStep ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 h-1 mx-2 ${s < bookingStep ? "bg-yellow-400" : "bg-gray-200"}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* step 1 */}
            {bookingStep === 1 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Personal Information</h4>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <button
                  onClick={handleBookingNext}
                  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Next Step
                </button>
              </div>
            )}

            {/* step 2 */}
            {bookingStep === 2 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Vehicle Information</h4>
                <input
                  name="carModel"
                  placeholder="Car Make, Model & Year"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <textarea
                  name="issue"
                  placeholder="Describe the issue or symptoms..."
                  value={formData.issue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none h-24"
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => setBookingStep(1)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBookingNext}
                    className="flex-1 bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* step 3 */}
            {bookingStep === 3 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Schedule Appointment</h4>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Select Preferred Time</option>
                  {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"].map((t)=>(
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <div className="flex gap-4">
                  <button
                    onClick={() => setBookingStep(2)}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBookingSubmit}
                    disabled={loading}
                    className="flex-1 bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {loading ? "Submitting..." : "Book Appointment"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDiagnosticPage;
