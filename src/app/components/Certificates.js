'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Certificates() {
  const certificates = [
    {
      title: "Business Excellence Awards 2023",
      institution: "Coursera",
      image: "/cert1.jpeg",
    },
    {
      title: "Shopping Ads Certification 2022",
      institution: "Google",
      image: "/cert2.jpeg",
    },
    {
      title: "Google Ads Display Certification 2022",
      institution: "Google",
      image: "/cert3.jpeg",
    },
    {
      title: "Google Ads Search Certification 2022",
      institution: "Google",
      image: "/cert4.jpeg",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] text-white relative">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">Our Achievements.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden group relative hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <Image
              src={cert.image || '/placeholder.jpeg'}
              alt={cert.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover group-hover:blur-sm transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-center p-4">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-sm mb-4 text-gray-300">{cert.institution}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="px-4 py-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">{selectedCert.title}</h3>
            <Image
              src={selectedCert.image}
              alt={selectedCert.title}
              width={800}
              height={500}
              className="w-full rounded-xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
