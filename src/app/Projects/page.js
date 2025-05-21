"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

const projects = [
  {
    id: 1,
    image: "/projects/wsci.webp",
    link: "https://wsci.in/",
    description:
      "WSCI is a world-renowned wine and spirits trade show that has established itself as more than just a trade fair; it's a cornerstone for international networking, offering a platform for industry professionals to connect, exchange knowledge, and explore the latest trends shaping the industry.",
  },
  {
    id: 2,
    image: "/projects/feather.png",
    link: "https://feathersleep.com/",
    description:
      "Feather Sleep is a customized mattress manufacturing company dedicated to providing comfortable sleep solutions. They focus on delivering high-quality, personalized mattresses designed to meet individual sleep preferences and needs.",
  },
  {
    id: 3,
    image: "/projects/bright.jpeg",
    link: "https://www.brightplum.in/",
    description:
      "Bright Plum, Inc. is a boutique minority-owned web firm with over 15 years of experience. They specialize in custom web platforms, e-commerce solutions, and websites for enterprises, small businesses, and non-profits, offering services like Drupal development, project consulting, and strategy support.",
  },
  {
    id: 4,
    image: "/projects/takashi.png",
    link: "https://takashi-films.com/",
    description:
      "Takashi Films Industries is a leader in anti-counterfeiting technology, specializing in high-quality holographic solutions. They focus on enhancing brand security and product authenticity, combining innovation with visual appeal to protect and elevate clients’ brands across various industries.",
  },
  {
    id: 5,
    image: "/projects/culture.jpeg",
    link: "https://shopprintculture.com/",
    description:
      "Shop Print Culture provides the highest quality branded instant canopy tents, flags, table covers, trade show displays, and inflatables. Utilizing state-of-the-art equipment, they produce professional-grade promotional and marketing products for various business needs.",
  },
  {
    id: 6,
    image: "/projects/rnr.jpg",
    link: "https://www.rnrbuildtech.com/",
    description:
      "RNR Buildtech is a prominent construction company in Bangalore, specializing in residential and commercial projects. With an in-house team of experienced architects and designers, they offer comprehensive services from planning to execution, ensuring quality and client satisfaction.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">
      <Header />
      <section
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="backdrop-blur-md bg-white/10 px-12 py-10 rounded-xl shadow-lg w-full max-w-3xl text-center">
            <h1 className="text-white text-5xl font-bold">Our Projects</h1>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Project {project.id}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-full hover:animate-pulse transition duration-300"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
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
