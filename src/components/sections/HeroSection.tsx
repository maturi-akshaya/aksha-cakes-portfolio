"use client";

import Image from "next/image";
import { BUSINESS_INFO } from "@/constants/business";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center 
      bg-gradient-to-r from-pink-100 via-white to-pink-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE (TEXT) */}
        <div className="text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-pink-700 leading-tight">
            Delicious Cakes for Every Occasion 🎂
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Freshly baked eggless cakes made with love for birthdays,
            anniversaries, and special moments.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hi%20I%20want%20to%20order%20a%20cake`}
              target="_blank"
              className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition text-sm sm:text-base"
            >
              Order on WhatsApp
            </a>

            <a
              href="/gallery"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition text-sm sm:text-base"
            >
              View Cakes
            </a>

          </div>

        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center">

          <div className="relative w-[260px] sm:w-[320px] md:w-[420px] h-[260px] sm:h-[320px] md:h-[420px]">

           <Image
            src="/cake-hero.jpg"
            alt="Cake"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 420px"
            className="object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}