"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="bg-obsidian py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group"
        >
          <div className="absolute inset-0 border border-gold/40 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700 ease-out z-0" />
          <div className="absolute inset-0 bg-charcoal z-10 overflow-hidden">
            {/* Needs an actual image of Jorge and Paola here */}
            <div className="w-full h-full bg-charcoal relative">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Jorge Florez and Paola Díaz"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </motion.div>

        {/* Right column: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center max-w-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">The Legacy</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-pearl leading-tight mb-8">
            Data-driven strategies meets unwavering excellence.
          </h2>
          
          <p className="text-muted leading-relaxed mb-10 text-lg">
            Founded by Jorge Florez and Paola Díaz. Transforming the Florida real estate experience through intelligent acquisitions, marketing 360, and a deep understanding of the global market.
          </p>

          <blockquote className="border-l-2 border-gold pl-6 py-2 my-6 bg-gradient-to-r from-gold/5 to-transparent">
            <p className="font-serif italic text-2xl md:text-3xl text-gold leading-relaxed">
              &quot;Inversiones inteligentes y no emocionales.&quot;
            </p>
            <footer className="mt-4 text-sm text-pearl/50 uppercase tracking-widest">
              — Paola Díaz
            </footer>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
