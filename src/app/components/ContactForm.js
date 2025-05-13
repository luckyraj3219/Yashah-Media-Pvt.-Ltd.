"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    alert(result.status === "success" ? "Message sent!" : "Error: " + result.message);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative max-w-3xl mx-auto z-10 backdrop-blur-xl bg-black/10 rounded-2xl border border-white/20 shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white/80 text-black font-semibold py-3 rounded-lg hover:bg-white transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
