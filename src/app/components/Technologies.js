'use client';

import Image from 'next/image'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Technologies() {
  const technologies = [
    {
      title: 'Magento',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/magento-283044.png',
    },
    {
      title: 'Flutter',
      imageUrl: '/flutterr.png',
    },
    {
      title: 'Laravel',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/laravel-226021.png',
    },
    {
      title: 'MySQL',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/mysql-17-1175159.png',
    },
    {
      title: 'Shopify',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/shopify-3622269-3029339.png',
    },
    {
      title: 'WordPress',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/wordpress-226017.png',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="technologies" className="py-20 px-4 bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">Technologies We Work With</h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {technologies.map((tech, idx) => (
            <div key={idx} className="px-4">
              <div className="w-[260px] h-[260px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-5 shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-blue-500/40 relative overflow-hidden">
                <Image
                  src={tech.imageUrl}
                  alt={tech.title}
                  width={240}
                  height={240}
                  className="w-full h-full object-contain transition-all duration-300 ease-in-out transform hover:scale-110 hover:blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-semibold">{tech.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
