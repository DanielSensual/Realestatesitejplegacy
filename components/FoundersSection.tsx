"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FoundersSection() {
  return (
    <>
      {/* Founders Section */}
      <section className="bg-obsidian py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left column: Real founders photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none group"
          >
            <div className="absolute inset-0 border border-gold/40 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700 ease-out z-0" />
            <div className="absolute inset-0 bg-charcoal z-10 overflow-hidden">
              <div className="w-full h-full bg-charcoal relative">
                <Image 
                  src="/images/founders.webp"
                  alt="Jorge Florez and Paola Díaz — JP Legacy Group"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
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

      {/* Video Showcase Section */}
      <section className="bg-charcoal py-24 relative z-10 border-y border-gold/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Watch Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-pearl mt-4">Experience JP Legacy</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-video w-full rounded-lg overflow-hidden border border-gold/20 shadow-2xl"
          >
            <iframe
              src="https://www.youtube.com/embed/TS-lmsGglAk?autoplay=0&rel=0&modestbranding=1"
              title="JP Legacy Group"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-obsidian py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Curated Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl text-pearl mt-4">Featured Properties</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/property-1.jpg", title: "Mirabella Circle", location: "Orlando, FL" },
              { src: "/images/property-2.jpg", title: "Preserve Pointe Blvd", location: "Clermont, FL" },
              { src: "/images/drone-view.jpg", title: "Aerial Estate View", location: "Central Florida" },
            ].map((property, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/10 mb-4">
                  <Image
                    src={property.src}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl text-pearl group-hover:text-gold transition-colors">{property.title}</h3>
                <p className="text-muted text-sm tracking-wide">{property.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

