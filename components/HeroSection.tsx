"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image — Real JP Legacy cityscape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-obsidian z-10" />
        <Image
          src="/images/hero-bg.webp"
          alt="Florida skyline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30"
      >
        <Image
          src="/images/logo.png"
          alt="JP Legacy Group"
          width={220}
          height={75}
          className="object-contain"
          priority
        />
      </motion.div>

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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 z-20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

