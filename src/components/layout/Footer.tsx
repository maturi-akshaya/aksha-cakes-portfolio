"use client";

import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BUSINESS_INFO } from "@/constants/business";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#3b1f2b] via-[#2d1821] to-[#171015] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">
              {BUSINESS_INFO.name}
            </h3>

            <p className="mt-2 text-pink-100">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="mt-4 text-sm text-pink-100 leading-relaxed">
              Freshly baked homemade cakes crafted with love for
              birthdays, anniversaries, theme parties, and all your
              special celebrations.
            </p>
          </div>

          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-4">

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-pink-200 transition"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:+91${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 hover:text-pink-200 transition"
              >
                <FaPhoneAlt size={18} />
                <span>Call Now</span>
              </a>

              <a
                href="https://instagram.com/aksha.cakes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-pink-200 transition"
              >
                <FaInstagram size={20} />
                <span>{BUSINESS_INFO.instagram}</span>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  BUSINESS_INFO.location
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-pink-200 transition"
              >
                <FaMapMarkerAlt size={18} />
                <span>{BUSINESS_INFO.location}</span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-pink-400 mt-10 pt-6 text-center text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}.
            Made with <FaHeart className="text-red-300" /> for sweet celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}