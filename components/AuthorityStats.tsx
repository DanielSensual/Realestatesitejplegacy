"use client";

import { motion } from "framer-motion";

export default function AuthorityStats() {
  const stats = [
    { value: "$100M+", label: "Sales Volume" },
    { value: "300+", label: "Families Helped" },
    { value: "Top 1%", label: "Florida Realtors" },
  ];

  return (
    <section className="bg-charcoal py-16 relative z-10 border-y border-gold/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="px-6 py-4 md:py-0 flex flex-col items-center justify-center"
            >
              <h3 className="font-serif text-5xl md:text-6xl text-gold mb-3 drop-shadow-md">
                {stat.value}
              </h3>
              <p className="text-pearl/80 font-sans tracking-widest uppercase text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
