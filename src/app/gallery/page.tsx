"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, CakeCategory } from "@/constants/gallery";

type FilterCategory = "All" | CakeCategory;

const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Birthday",
  "Anniversary",
  "Theme",
  "Custom",
  "Cookies",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return GALLERY_IMAGES;

    return GALLERY_IMAGES.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Cakes & Cookies Gallery
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Explore our handcrafted cakes and cookies made for
            birthdays, anniversaries, themed celebrations,
            custom occasions, and sweet gifting moments.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-rose-500 text-white shadow-md scale-105"
                  : "bg-white border border-rose-200 text-gray-700 hover:bg-rose-50 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mb-8 text-gray-600">
          Showing{" "}
          <span className="font-semibold text-rose-500">
            {filteredItems.length}
          </span>{" "}
          items
        </div>

        {/* Gallery */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className="group break-inside-avoid mb-8 overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={800}
                    height={800}
                    priority={index === 0}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-500 shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.category === "Cookies"
                      ? "Freshly baked cookies made with premium ingredients and delightful flavors."
                      : "Crafted with premium ingredients and customized for memorable celebrations."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500">
            No items found in this category.
          </div>
        )}
      </div>
    </main>
  );
}