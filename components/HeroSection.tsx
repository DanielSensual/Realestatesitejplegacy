"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gold tracking-widest uppercase font-sans text-sm md:text-base font-semibold mb-6"
        >
          The Apex of Florida Real Estate
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl text-pearl leading-tight mb-12"
        >
          Curating Florida&apos;s Most Exclusive Real Estate Portfolios.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-8 py-4 backdrop-blur-md bg-white/5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 font-medium tracking-wide">
            View Exclusives
          </button>
          <button className="px-8 py-4 bg-gold border border-gold text-obsidian hover:bg-gold-hover hover:border-gold-hover transition-all duration-300 font-medium tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Consult with JP Legacy
          </button>
        </motion.div>
      </div>
    </section>
  );
}
