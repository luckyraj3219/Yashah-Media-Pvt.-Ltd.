export default function Contact() {
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
        <form>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
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
