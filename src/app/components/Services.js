'use client';

import { FaBullhorn, FaPaintBrush, FaCode, FaCamera, FaUsers, FaPenNib, FaSearch } from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Boost your brand's presence with SEO, paid ads, and analytics. We drive traffic, increase visibility, and convert leads across all digital platforms effectively.",
      icon: <FaBullhorn className="text-6xl text-blue-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Creative Designing",
      description:
        "Designs that speak—logos, posters, and branding that reflect your identity and connect with your audience powerfully and professionally.",
      icon: <FaPaintBrush className="text-6xl text-pink-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Video Production",
      description:
        "We produce cinematic ad films, reels, and content that emotionally engage your audience and deliver compelling brand messages.",
      icon: <RiMovie2Fill className="text-6xl text-red-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Website & App Development",
      description:
        "Custom websites and apps built for speed, design, and usability. We deliver modern, responsive digital experiences.",
      icon: <FaCode className="text-6xl text-green-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your social presence with strategies that include content, reels, and paid ads tailored for engagement and conversions.",
      icon: <MdCampaign className="text-6xl text-purple-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Product Photography",
      description:
        "Professional images that highlight your product’s appeal with clear detail, lighting, and composition for ads and e-commerce.",
      icon: <FaCamera className="text-6xl text-yellow-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Brand Promotions",
      description:
        "Promote your brand through influencer marketing, local activations, and creative campaigns that build trust and reach.",
      icon: <FaUsers className="text-6xl text-cyan-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Content Writing",
      description:
        "SEO-focused, engaging content including blogs, copywriting, and web pages crafted to connect with your audience and rank high.",
      icon: <FaPenNib className="text-6xl text-indigo-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your search rankings with on-page and off-page SEO, audits, keywords, and performance strategies that drive traffic.",
      icon: <FaSearch className="text-6xl text-orange-500 mb-3 drop-shadow-lg" />,
    },
    {
      title: "Ad Films",
      description:
        "Create short, story-rich films for advertisements and branding with strong visuals and emotional storytelling.",
      icon: <RiMovie2Fill className="text-6xl text-rose-500 mb-3 drop-shadow-lg" />,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">Our Services</h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div key={idx} className="px-4">
              <div className="w-[316px] h-[316px] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-5 shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-blue-500/40 flex flex-col items-center justify-start text-center">
                {service.icon}
                <h3 className="text-xl font-bold mt-2 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
