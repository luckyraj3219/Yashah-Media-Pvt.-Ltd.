"use client";
import { useState, useEffect, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const quotes = [
  "Transforming Ideas into Impact",
  "Crafting Stories that Connect",
  "Digital Excellence Delivered",
  "Where Creativity Meets Results",
];

function Model() {
  const gltf = useGLTF("/video.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y +=0.005;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={0.8} position={[0, -1, 0]} />;
}

export default function Hero2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero2" className="relative h-[100vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12 text-white">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{quotes[index]}</h2>
          <p className="text-lg md:text-xl">
            At Yashah Media, we turn your digital dreams into reality.
          </p>
        </motion.div>

        <div className="hidden md:block w-full md:w-1/2 h-[75vh]">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[0, 5, 5]} />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
