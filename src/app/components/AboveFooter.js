'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function AboveFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <section className="w-full bg-[#111111] text-white py-16 px-8 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

      
        <motion.div className="text-left">
          <div className="w-20 h-20 bg-white rounded-full shadow-[0_0_20px_white] flex items-center justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </div>
          <p className="text-lg leading-relaxed text-gray-200">
            Driven by <span className="text-red-500 font-semibold underline">creativity</span> and relentless{' '}
            <span className="text-red-500 font-semibold italic underline">innovation</span>. Our dedicated team
            constantly explores fresh perspectives to ensure your{' '}
            <span className="text-red-500 font-semibold italic underline">digital presence</span> remains impactful.
          </p>
        </motion.div>

      
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3">
            {['home', 'about', 'services', 'contact'].map((link) => (
              <li key={link}>
                <motion.a
                  href="#"
                  className={`text-lg hover:text-red-500 transition-colors duration-300 ${
                    hoveredLink === link ? 'text-red-500' : 'text-gray-300'
                  }`}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1).replace('-', ' ')}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="text-right">
          <p className="text-xl font-bold mb-3 flex items-center justify-end text-white">
            <FaPhone className="mr-2 text-red-500" /> 01245181301
          </p>
          <p className="text-lg text-gray-300">
            <FaMapMarkerAlt className="inline mr-2 text-red-500" /> Unit No– 2012 DLF Corporate
          </p>
          <p className="text-lg text-gray-300">Green Tower A Sector 74a,</p>
          <p className="text-lg text-gray-300">SPR Road, Gurgaon</p>
        </div>
      </div>
    </section>
  );
}
