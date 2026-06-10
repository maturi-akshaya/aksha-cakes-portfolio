"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/constants/gallery";

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = GALLERY_IMAGES[currentIndex];

  return (
    <section id="gallery" className="rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Cake Gallery
        </h2>

        <div className="relative">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={1200}
            height={700}
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {GALLERY_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-rose-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}