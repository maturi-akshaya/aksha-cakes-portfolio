import HeroSection from "@/components/sections/HeroSection";
import DetailsSection from "@/components/sections/DetailsSection";
import GalleryCarousel from "@/components/sections/GalleryCarousel";
import Specialities from "@/components/sections/Specialities";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/animations/FadeUp";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-pink-50 to-white">
      <FadeUp><HeroSection /></FadeUp>
      <FadeUp><DetailsSection /></FadeUp>
      <FadeUp><GalleryCarousel /></FadeUp>
      <FadeUp><Specialities /></FadeUp>
      <FadeUp><StatsSection /></FadeUp>
      <FadeUp><Testimonials /></FadeUp>

      <Footer />

      <a
        href="https://wa.me/917337335674?text=Hi%20I%20want%20to%20order%20a%20cake"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
      >
        <FaWhatsapp size={32} />
      </a>
    </main>
  );
}