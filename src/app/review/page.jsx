"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, Car, Send, CheckCircle2, User, Calendar, MapPin, Sparkles, ArrowRight } from "lucide-react";

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carModel: "",
    rating: 5,
    review: "",
    serviceCategory: "Precision Brake Service"
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: `Customer Review: ${formData.serviceCategory} (${formData.rating} Stars)`,
          message: `Vehicle: ${formData.carModel}\nRating: ${formData.rating} / 5\nReview: ${formData.review}`
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
          <span>Driver Feedback & Ratings</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Leave a <span className="gold-gradient-text">Verified Review</span>.
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Your authentic feedback helps us continually elevate our automotive engineering standards and guide fellow drivers.
        </p>
      </section>

      {/* Form Body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border-gray-800 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Thank You for Your Feedback!</h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Your review has been successfully submitted and helps us maintain our 5-star reputation.
              </p>
              <div className="pt-4">
                <Link href="/" className="gold-glow-btn px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-block">
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Michael Vance"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Vehicle Model & Year *
                  </label>
                  <input
                    type="text"
                    name="carModel"
                    required
                    value={formData.carModel}
                    onChange={handleInputChange}
                    placeholder="e.g. 2022 Porsche 911"
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Service Performed
                  </label>
                  <select
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option>Computerized Diagnostics</option>
                    <option>Precision Brake Service</option>
                    <option>Synthetic Oil & Health Inspection</option>
                    <option>Transmission Overhaul</option>
                    <option>Tires & 3D Wheel Alignment</option>
                    <option>Climate & AC Service</option>
                  </select>
                </div>
              </div>

              {/* Star Rating selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Rating (Select 1 to 5 Stars)
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1 transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredStar || formData.rating)
                            ? "fill-amber-400 text-amber-400 drop-shadow"
                            : "text-gray-700"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-amber-400 font-bold ml-2">
                    {formData.rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Your Detailed Review *
                </label>
                <textarea
                  name="review"
                  required
                  rows="4"
                  value={formData.review}
                  onChange={handleInputChange}
                  placeholder="Share details about technician knowledge, turnaround speed, and vehicle performance after service..."
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="gold-glow-btn w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-black" />
                <span>{isSubmitting ? "Submitting Review..." : "Publish Driver Review"}</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}