"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const points = [
  {
    title: "Who I am",
    body: "An AI & Data Engineering student from Antalya, Türkiye, focused on turning research-grade ML into software that ships.",
  },
  {
    title: "What I build",
    body: "Forecasting tools, computer-vision apps, and self-hosted MLOps infrastructure — end to end, from model to deployment.",
  },
  {
    title: "Goals",
    body: "To work at the intersection of applied machine learning and cloud-native systems, on products used by real people.",
  },
  {
    title: "Interests",
    body: "Federated learning, financial markets, Kubernetes internals, and anything that makes infrastructure simpler.",
  },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            About
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Grounded in engineering,
            <br /> driven by curiosity.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {profile.education}. {profile.location}. I like building things
            that close the gap between a trained model and a working product.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group rounded-2xl p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="font-display text-base font-medium text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
