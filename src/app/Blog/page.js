"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Digital Marketing Trends",
    image: "/images/digital-marketing.jpg",
    shortDescription:
      "Discover the latest digital marketing strategies that drive real results for your business in today’s competitive landscape. From SEO to paid ads and influencer marketing, learn how to stay ahead with data-driven methods that work.",
    fullContent:
      "In today’s digital era, marketing has evolved from traditional methods to a more data-driven and interactive approach. Digital marketing encompasses a range of strategies including SEO, social media marketing, influencer collaborations, paid advertising, and content marketing. SEO helps you rank better in search engines, improving organic traffic. Social platforms such as Instagram, Facebook, and LinkedIn are used to build brand identity and connect with users. Paid ads bring instant visibility, while influencer marketing adds authenticity. The key to success is creating content that resonates with your audience and is backed by analytics to track performance. Staying updated with trends like AI-driven marketing tools, personalization, and mobile-first strategies ensures that your brand remains relevant. Ultimately, digital marketing is not just about promoting a product but about telling your brand’s story in a way that engages and converts audiences effectively. This evolving field emphasizes the importance of adapting to new trends while maintaining core strategies that drive engagement. As technology continues to grow, integrating new tools into your marketing plan will help to ensure your brand’s success in a competitive market.",
  },
  {
    title: "Creative Designing Secrets",
    image: "/images/designing.jpg",
    shortDescription:
      "Unlock the power of creative design to build your brand’s identity. Learn how visuals, colors, and layout impact user perception and increase engagement across digital and print media.",
    fullContent:
      "Creative design is more than just aesthetics—it's about communication. Effective design tells a story, captures attention, and builds emotional connections. Whether it's a logo, website, flyer, or social post, design influences how users perceive your brand. Consistency in color schemes, typography, and imagery across platforms helps in building recognition. Good design also enhances user experience—clear layouts, readable fonts, and intuitive navigation all play a role. In today’s visual world, minimalism and clarity often outperform cluttered designs. Tools like Figma, Adobe XD, and Canva have made it easier to prototype and test before publishing. Brands must understand their audience to tailor visuals accordingly—what appeals to a tech-savvy youth might not resonate with corporate stakeholders. Trends like 3D graphics, gradients, and animations are gaining popularity, but the core of effective design remains the same: clarity, purpose, and emotional connection. Investing in professional design pays off in credibility, trust, and customer retention. Effective design is rooted in understanding the problem you’re solving, ensuring every visual element has a purpose and supports your brand's mission. These insights are key to creating designs that not only look good but also communicate the intended message to your audience.",
  },
  {
    title: "The Future of Web Development",
    image: "/images/development.jpg",
    shortDescription:
      "Web development is evolving at a rapid pace. Explore the future trends, tools, and technologies shaping the web and how they will change how we build and experience websites.",
    fullContent:
      "The future of web development is extremely exciting, as technology continues to advance, bringing new possibilities and challenges. Web development has evolved from simple static websites to complex, interactive web applications that require advanced coding skills and an understanding of modern frameworks and libraries. Trends like serverless computing, Progressive Web Apps (PWAs), and Single Page Applications (SPAs) are becoming increasingly popular. Tools like React, Angular, and Vue.js are dominating the front-end development space, while Node.js and Django are popular for back-end development. Web developers are now utilizing APIs to create dynamic and responsive websites. The shift towards mobile-first and responsive design ensures that websites are optimized for all devices, including smartphones, tablets, and desktops. The rise of Artificial Intelligence (AI) is also playing a significant role in web development, with AI tools now capable of assisting developers with tasks such as coding, debugging, and even automating the testing process. As voice search and chatbots become more integrated into websites, developers will need to adapt and ensure that websites are optimized for these technologies. Cybersecurity will also remain a top priority, as the growing number of online users makes it more important than ever to ensure websites are secure and protected against threats. Ultimately, the future of web development will be shaped by innovations in technology and a need for developers to stay agile and adapt to ever-changing trends and best practices. The most successful websites of tomorrow will be those that are scalable, fast, and offer an exceptional user experience across all platforms.",
  },
];

export default function BlogPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClosePopup = () => {
    setActiveIndex(null);
  };

  return (
    <main className="bg-black text-white">
      <Header />
      <section
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="backdrop-blur-md bg-white/10 px-12 py-10 rounded-xl shadow-lg w-full max-w-3xl text-center">
            <h1 className="text-white text-5xl font-bold">Our Blog</h1>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-lg relative"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.shortDescription}</p>
              <button
                onClick={() => setActiveIndex(index)}
                className="bg-red-600 text-white px-5 py-2 rounded-full hover:animate-pulse transition duration-300"
              >
                Read More
              </button>

              {activeIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-4">
                  <div className="bg-[#1a1a1a] p-6 rounded-xl max-w-3xl w-full relative border border-white/20 overflow-y-scroll h-full">
                    <button
                      onClick={handleClosePopup}
                      className="absolute top-4 right-4 text-white text-2xl font-bold"
                    >
                      &times;
                    </button>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-3xl font-semibold mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-300">{post.fullContent}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-0 pt-0">
        <ContactForm />
      </section>

      <section className="bg-gray-900 px-0 pt-0">
        <AboveFooter />
      </section>

      <Footer />
    </main>
  );
}
