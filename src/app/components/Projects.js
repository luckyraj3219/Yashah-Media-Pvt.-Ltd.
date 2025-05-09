"use client";
import Image from "next/image"; 
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "/projects/wsci.webp",
    link: "https://wsci.in/",
  },
  {
    id: 2,
    image: "/projects/feather.png",
    link: "https://feathersleep.com/",
  },
  {
    id: 3,
    image: "/projects/bright.jpeg",
    link: "https://www.brightplum.in/",
  },
  {
    id: 4,
    image: "/projects/takashi.png",
    link: "https://takashi-films.com/",
  },
  {
    id: 5,
    image: "/projects/culture.jpeg",
    link: "https://shopprintculture.com/",
  },
  {
    id: 6,
    image: "/projects/rnr.jpg",
    link: "https://www.rnrbuildtech.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-[#111111]">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-md"
          >
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              width={500}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-semibold underline hover:text-red-400"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
