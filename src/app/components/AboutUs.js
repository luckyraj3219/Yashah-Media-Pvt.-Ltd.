'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#0e0e0e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
       
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/team-working.jpg" 
            alt="Yashah Media Team"
            width={600}
            height={400}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </motion.div>

      
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-white">Who We Are</h2>
          <p className="mb-4 text-lg leading-relaxed">
            At <span className="text-pink-400 font-semibold">Yashah Media</span>, we build more than websites — we craft digital experiences that leave a mark. From creative branding to innovative digital marketing strategies, we help businesses thrive online.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Our team blends creativity with strategy, technology with design, and passion with purpose. Whether it is a startup or an established brand, we bring your vision to life with modern, scalable, and effective solutions.
          </p>
          <p className="text-lg leading-relaxed">
            Lets shape the future together — one click, one strategy, one success at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
