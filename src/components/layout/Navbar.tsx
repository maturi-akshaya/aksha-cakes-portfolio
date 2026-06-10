import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/constants/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 
            bg-gradient-to-r from-white via-pink-50 to-pink-100 
            backdrop-blur-md border-b border-pink-200 shadow-sm
            transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-pink-700">
            {BUSINESS_INFO.name}
          </span>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6 font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pink-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}