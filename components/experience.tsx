"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-primary">
          Experience
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Where the time went.
        </h2>
      </motion.div>

      <div className="relative border-l border-ink/10 pl-8">
        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-primary shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
            <span className="font-mono text-xs text-muted">{item.period}</span>
            <h3 className="mt-1 font-display text-lg font-medium text-ink">
              {item.title}{" "}
              <span className="font-sans text-sm font-normal text-primary">
                @ {item.org}
              </span>
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
