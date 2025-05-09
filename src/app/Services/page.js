"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaCamera, FaUsers, FaPenNib, FaSearch, FaStar } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

const services = [
  {
    title: "Digital Marketing",
    description: "Boost your brand’s presence with our comprehensive digital marketing strategies, including social media campaigns, SEO optimization, paid ads, and influencer marketing. Our team helps drive targeted traffic to your website and increases conversion rates, ensuring your brand stands out in the competitive online space. From planning to execution, we offer tailor-made solutions to maximize your online reach.",
    icon: <FaBullhorn className="text-4xl text-blue-400 mb-3" />,
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Creative Designing",
    description: "We craft visually striking and purpose-driven designs that tell a compelling story about your brand. Whether it's logos, branding, print materials, or digital assets, we combine creativity with functionality to produce designs that leave a lasting impression. Our team ensures that every design element aligns with your brand's voice and message, making it visually appealing while enhancing user experience.",
    icon: <FaPaintBrush className="text-4xl text-pink-400 mb-3" />,
    image: "/images/designing.jpg",
  },
  {
    title: "Video Production",
    description: "We produce high-quality cinematic video content that engages audiences and communicates your message effectively. From scriptwriting to final edits, we cover every stage of video production to deliver impactful visual stories. Whether it’s promotional videos, documentaries, or tutorials, we ensure that your brand's narrative is brought to life in a captivating and professional manner.",
    icon: <RiMovie2Fill className="text-4xl text-red-400 mb-3" />,
    image: "/images/video.jpg",
  },
  {
    title: "Website & App Development",
    description: "We build fast, responsive, and user-friendly websites and applications that cater to your specific needs. From e-commerce platforms to custom web solutions, we use the latest technologies to create seamless experiences for users. Our team ensures high performance, security, and scalability, so your business can thrive in the digital landscape. We focus on providing a smooth, intuitive, and efficient experience for both desktop and mobile users.",
    icon: <FaCode className="text-4xl text-green-400 mb-3" />,
    image: "/images/development.jpg",
  },
  {
    title: "Social Media Marketing",
    description: "Enhance your social presence with tailored content strategies, community management, and advertising campaigns. We help grow your brand's voice across platforms such as Instagram, Facebook, Twitter, and LinkedIn, engaging with your audience and boosting brand recognition. Our team creates content that resonates with your audience and ensures that your business reaches the right people at the right time.",
    icon: <MdCampaign className="text-4xl text-purple-400 mb-3" />,
    image: "/images/social media.jpg",
  },
  {
    title: "Product Photography",
    description: "We deliver sharp, attractive product photography that highlights your products in the best light. From e-commerce websites to marketing materials, we provide professional images that grab attention and increase conversions. Our photographers specialize in capturing every detail, ensuring that your products stand out and entice customers with high-quality visuals.",
    icon: <FaCamera className="text-4xl text-yellow-400 mb-3" />,
    image: "/images/product-photography.jpg",
  },
  {
    title: "Brand Promotions",
    description: "Promote your brand through targeted campaigns designed to create lasting impressions. Our strategies encompass influencer collaborations, social media ads, sponsorships, and more. By leveraging multiple promotional channels, we ensure that your brand reaches a wider audience and engages effectively with potential customers. Let us help you build a stronger brand presence in your market.",
    icon: <FaUsers className="text-4xl text-cyan-400 mb-3" />,
    image: "/images/brand promotion.jpg",
  },
  {
    title: "Content Writing",
    description: "Our team crafts SEO-optimized, engaging content that attracts and retains audiences. From blogs to website copy and product descriptions, we focus on creating valuable content that speaks directly to your target market. Our writers are skilled in adapting tone and style to fit your brand's voice, ensuring that the content not only educates but also inspires action.",
    icon: <FaPenNib className="text-4xl text-indigo-400 mb-3" />,
    image: "/images/content.jpg",
  },
  {
    title: "SEO Optimization",
    description: "Drive more organic traffic to your website with our SEO services. We conduct thorough keyword research, on-page optimization, and technical SEO audits to ensure your site ranks higher in search engine results. Our team uses proven techniques to enhance visibility and increase traffic, ultimately leading to better lead generation and higher conversion rates.",
    icon: <FaSearch className="text-4xl text-orange-400 mb-3" />,
    image: "/images/seo.jpg",
  },
  {
    title: "Ad Films",
    description: "Create powerful ad films that tell your story and resonate with your audience. From conceptualizing the storyline to production and editing, we ensure your ad communicates your message in a compelling and creative way. Our ad films are designed to generate emotions and drive engagement, helping your brand stand out in a crowded marketplace.",
    icon: <RiMovie2Fill className="text-4xl text-rose-400 mb-3" />,
    image: "/images/ads.jpg",
  },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    feedback: "The digital marketing team really boosted my online visibility. Highly satisfied!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    feedback: "Creative designing was fantastic. My brand now has a fresh and modern identity.",
    rating: 4,
  },
  {
    name: "Arjun Verma",
    feedback: "Loved the video production. Very professional and impactful visuals!",
    rating: 5,
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".slide-left, .slide-right").forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="bg-black">
      <Header />

      <section
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="backdrop-blur-md bg-white/10 px-12 py-10 rounded-xl shadow-lg w-full max-w-3xl text-center">
            <h1 className="text-white text-5xl font-bold">Our Services</h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 space-y-16 text-white">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-10`}
          >
            <div
              className={`md:w-1/2 w-full opacity-0 transform transition-transform duration-700 ${
                index % 2 === 0 ? "slide-left" : "slide-right"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-xl border border-white/20 shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-xl">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-200 mb-4">{service.description}</p>
              <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:animate-pulse transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#111111] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Client Feedback</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-lg"
              >
                <FaStar className="text-yellow-400 text-3xl mx-auto mb-4" />
                <p className="italic text-gray-200 mb-4">“{t.feedback}”</p>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <div className="text-yellow-400 mt-2">
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-0 pt-0">
        <ContactForm />
      </section>

      <section className="bg-gray-900 px-0 pt-0">
        <AboveFooter />
      </section>

      <Footer />

      <style jsx>{`
        .slide-left.animate-slide {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-right.animate-slide {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-left {
          transform: translateX(-100px);
        }
        .slide-right {
          transform: translateX(100px);
        }
      `}</style>
    </main>
  );
}
