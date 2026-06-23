"use client";

import Image from "next/image";
import { BUSINESS_INFO } from "@/constants/business";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-rose-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-pink-700">
            Delicious Cakes for Every Occasion 🎂
          </h1>

          <p className="mt-5 text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
            Freshly baked eggless cakes made with love for birthdays,
            anniversaries, baby showers, and every special celebration.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hi%20I%20want%20to%20order%20a%20cake`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300"
            >
              Order on WhatsApp
            </a>

            <a
              href="/gallery"
              className="border-2 border-pink-600 text-pink-600 px-7 py-3 rounded-full hover:bg-pink-100 hover:scale-105 transition-all duration-300"
            >
              View Cakes
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-1 md:order-2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px]">
            
            {/* Main Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 blur-[80px] opacity-50" />

            {/* Secondary Glow */}
            <div className="absolute inset-8 rounded-full bg-pink-300 blur-3xl opacity-30 animate-pulse" />

            {/* Decorative Bubbles */}
            <div className="absolute top-8 right-6 w-10 h-10 bg-pink-400 rounded-full opacity-40 animate-bounce" />

            <div className="absolute bottom-12 left-4 w-6 h-6 bg-yellow-300 rounded-full opacity-60 animate-ping" />

            <div className="absolute top-24 left-2 w-5 h-5 bg-rose-300 rounded-full opacity-50 animate-bounce" />

            {/* Cake Image */}
            <div className="relative w-full h-full animate-float">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_25px_60px_rgba(236,72,153,0.35)] border-4 border-white/50">
                <Image
                  src="/mainhero.jpeg"
                  alt="Cake"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 480px"
                  className="object-cover"
                  style={{
                    objectPosition: "35% center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}