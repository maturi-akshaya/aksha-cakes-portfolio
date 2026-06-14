"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/constants/gallery";

const CAROUSEL_IMAGES = GALLERY_IMAGES.slice(0, 10);

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = CAROUSEL_IMAGES[currentIndex];

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Cake Gallery
        </h2>

        <div className="relative">
          {/* Premium Frame */}
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-rose-100">
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              width={1200}
              height={700}
              priority
              className="w-full h-[500px] object-contain rounded-2xl"
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg hover:bg-rose-50 transition flex items-center justify-center text-lg font-bold"
          >
            ←
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg hover:bg-rose-50 transition flex items-center justify-center text-lg font-bold"
          >
            →
          </button>
        </div>

        {/* Image Title */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">
            {currentImage.title}
          </h3>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index
                  ? "bg-rose-500 scale-125"
                  : "bg-gray-300 hover:bg-rose-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}