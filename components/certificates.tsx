"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import { certificates } from "@/lib/data";

export function Certificates() {
  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-end justify-between"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            Certificates
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Continuous Learning.
          </h2>
        </div>
      </motion.div>

      {/* Masonry-style Grid */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="glass group relative mb-5 flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary/30 break-inside-avoid"
          >
            <div className="mb-4">
              {cert.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cert.file}
                  alt={cert.name}
                  className="w-full h-auto rounded-lg object-cover mb-4 opacity-90 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-32 w-full items-center justify-center rounded-lg bg-white/5 mb-4">
                  <FileText className="h-10 w-10 text-muted transition-colors group-hover:text-primary" />
                </div>
              )}
            </div>
            <div>
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-medium text-ink">
                  {cert.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                {cert.type === "pdf" ? <FileText className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                View {cert.type.toUpperCase()}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
