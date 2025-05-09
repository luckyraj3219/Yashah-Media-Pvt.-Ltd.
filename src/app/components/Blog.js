"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Blog() {
  const blogCards = [
    {
      title: "Our Recent Campaigns",
      category: "Technology",
      image: "/blog1.jpg",
      description: "Discover how we help brands stand out using powerful digital tools.",
    },
    {
      title: "Creative Strategies",
      category: "Strategy",
      image: "/blog2.jpg",
      description: "Get inspired by how creativity meets strategy at Yashah Media.",
    },
    {
      title: "Leading AI Models",
      category: "Technology",
      image: "/blog3.jpg",
      description: "Learn all about our leading AI models — and discover their capabilities.",
    },
  ];

  const counters = [
    { label: "Projects Completed", value: 1200 },
    { label: "Happy Customers", value: 1424 },
    { label: "Years of Experience", value: 9 },
    { label: "Team Members", value: 50 },
  ];

  const [progress, setProgress] = useState(0);
  const maxDuration = 2000;

  useEffect(() => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const percentage = Math.min(progressTime / maxDuration, 1);
      setProgress(percentage);
      if (percentage < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="blog" className="py-16 px-6 bg-[#111111]">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest Blogs</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1a] p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <Image
              src={card.image}
              width={500}  
              height={300} 
              className="w-full h-48 object-cover rounded-xl mb-4"
              alt={card.title}
            />
            <p className="text-xs text-red-500 mb-2 uppercase font-bold tracking-wider">{card.category}</p>
            <h3 className="text-2xl font-semibold mb-2 text-white">{card.title}</h3>
            <p className="text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {counters.map((counter, idx) => {
              const animatedValue = Math.floor(counter.value * progress);
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-red-500 text-red-500 text-3xl font-extrabold mb-4">
                    {animatedValue}+
                  </div>
                  <p className="text-lg text-white font-medium">{counter.label}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
