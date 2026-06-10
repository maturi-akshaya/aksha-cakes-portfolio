"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
🍰 New Cake Order

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📝 Order Details: ${form.message}
    `;

    const phoneNumber = "917337335674"; // your WhatsApp number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 px-6 bg-pink-50">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Contact & Order Your Cake
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-black"
            required
          />

          <textarea
            name="message"
            placeholder="Cake details (flavour, size, message on cake)"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send on WhatsApp
          </button>

        </form>
      </div>
    </section>
  );
}