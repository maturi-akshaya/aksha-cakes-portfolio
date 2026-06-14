"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS_INFO } from "@/constants/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 
    bg-gradient-to-r from-white via-pink-50 to-pink-100 
    border-b shadow-sm">

      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <span className="text-lg font-bold text-pink-700">
            {BUSINESS_INFO.name}
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 shadow-md animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}