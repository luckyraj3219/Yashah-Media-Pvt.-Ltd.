"use client";

import Image from "next/image";
import { useState } from "react";
import AboveFooter from "../components/AboveFooter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Aboutpage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-black">
      <Header />

      <section
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="backdrop-blur-md bg-white/10 px-12 py-10 rounded-xl shadow-lg w-full max-w-3xl text-center">
            <h1 className="text-white text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-8 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/team-working.jpg"
              alt="Company"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
            <p className="text-lg">
              At Yashah Media, we build more than websites — we craft digital experiences that leave a mark. From creative branding to innovative digital marketing strategies, we help businesses thrive online.
              <br /><br />
              Our team blends creativity with strategy, technology with design, and passion with purpose. Whether it is a startup or an established brand, we bring your vision to life with modern, scalable, and effective solutions.
              <br /><br />
              Let’s shape the future together — one click, one strategy, one success at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-16 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <ul className="list-disc pl-5 text-lg space-y-4">
              <li>Expert team with years of digital experience</li>
              <li>Customized solutions tailored to your business needs</li>
              <li>High-performing websites with sleek modern design</li>
              <li>Data-driven digital marketing strategies</li>
              <li>Transparent communication and project tracking</li>
              <li>Reliable support even after project completion</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/choose.jpg"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16 text-white">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "What services do you offer?",
              answer: "We offer a wide range of digital services, including web development, digital marketing, branding, and e-commerce solutions.",
            },
            {
              question: "How long does it take to build a website?",
              answer: "The timeline depends on the complexity of the project. Typically, it takes 4 to 8 weeks for a standard website.",
            },
            {
              question: "Do you provide post-launch support?",
              answer: "Yes, we offer ongoing maintenance and support after the website goes live to ensure it continues to perform well.",
            },
            {
              question: "Can I update my website myself?",
              answer: "Yes, we provide content management systems (CMS) that allow you to update the content of your website easily.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md p-4 rounded-lg">
              <button
                className="w-full text-left text-xl font-semibold"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="bg-black text-white p-4 rounded-lg mt-2">{faq.answer}</p>
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
