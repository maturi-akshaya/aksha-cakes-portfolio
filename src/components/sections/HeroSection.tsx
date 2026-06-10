import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/constants/business";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center text-center px-6 
        bg-gradient-to-r from-pink-100 via-white to-pink-200">

      <div className="max-w-2xl">

        <p className="bg-pink-200 text-pink-700 px-4 py-1 rounded-full inline-block mb-4">
          Freshly baked handmade eggless cakes, customized just the way you love.
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Cakes Made with Love for Every Occasion
        </h1>

        <p className="text-gray-600 mt-4">
          Birthday • Wedding • Anniversary • Custom Designs
        </p>

        <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
        >
          Order Custom Cake
        </a>

          <a href="#gallery" className="border border-pink-400 text-pink-600 px-6 py-3 rounded-full hover:scale-105 transition">
            View Gallery
          </a>
          

        </div>

      </div>

    </section>
  );
}