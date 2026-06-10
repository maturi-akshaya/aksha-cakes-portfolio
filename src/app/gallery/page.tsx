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
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState<FilterCategory>("All");

  const filteredCakes = useMemo(() => {
    if (activeFilter === "All") return GALLERY_IMAGES;

    return GALLERY_IMAGES.filter(
      (cake) => cake.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900">
            Cake Gallery
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Explore our handcrafted cakes made for birthdays,
            anniversaries, themed celebrations and custom moments.
          </p>
        </div>

        {/* FILTER BUTTONS */}
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

        {/* COUNT */}
        <div className="text-center mb-8 text-gray-600">
          Showing{" "}
          <span className="font-semibold text-rose-500">
            {filteredCakes.length}
          </span>{" "}
          cakes
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCakes.map((cake, index) => (
            <article
              key={cake.id}
              className="group bg-white border border-rose-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={cake.src}
                  alt={cake.title}
                  width={500}
                  height={500}
                  priority={index === 0}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <span className="absolute top-4 left-4 bg-white/90 text-rose-500 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {cake.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {cake.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Crafted with premium ingredients and customized for
                  memorable celebrations.
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredCakes.length === 0 && (
          <div className="py-16 text-center text-gray-500">
            No cakes found in this category.
          </div>
        )}
      </div>
    </main>
  );
}