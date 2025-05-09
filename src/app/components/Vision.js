'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBullseye, FaEye } from 'react-icons/fa';

export default function Vision() {
  const [hovered, setHovered] = useState(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const cards = [
    {
      id: 'strategic',
      icon: <FaChartLine />,
      iconBg: 'from-indigo-500 to-purple-500',
      iconText: 'text-white',
      title: 'Strategic Marketing',
      text: `We craft data-driven strategies to boost your brand's visibility, engagement, and ROI. Our customized approach ensures you connect with the right audience and achieve sustainable growth.`,
      animate: 'animate-bounce'
    },
    {
      id: 'mission',
      icon: <FaBullseye />,
      iconBg: 'from-green-400 to-emerald-600',
      iconText: 'text-white',
      title: 'Our Mission',
      text: `Empowering brands with innovative digital solutions to enhance their visibility, engagement, and growth. We deliver impactful, result-oriented strategies.`,
      animate: 'animate-pulse'
    },
    {
      id: 'vision',
      icon: <FaEye />,
      iconBg: 'from-blue-400 to-sky-500',
      iconText: 'text-white',
      title: 'Our Vision',
      text: `To be a leading force in digital solutions—transforming brands through creativity, innovation, and storytelling to ensure lasting success.`,
      animate: 'animate-spin'
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">Our Strategic Marketing, Mission & Vision</h2>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
              whileHover="hover"
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-center">
                <div className={`w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${card.iconBg} flex items-center justify-center text-4xl ${card.iconText} ${hovered === card.id ? card.animate : ''}`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
