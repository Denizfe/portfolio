"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";
import { certificates } from "@/lib/data";

export function Certificates() {
  const standardCerts = certificates.filter(
    (c) => c.name !== "Runtalya" && c.name !== "Sosyal Etkinlik"
  );
  const eventCerts = certificates.filter(
    (c) => c.name === "Runtalya" || c.name === "Sosyal Etkinlik"
  );

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

      {/* Masonry-style Grid for Standard Certificates */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 mb-5">
        {standardCerts.map((cert, i) => (
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
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 opacity-90 transition-opacity group-hover:opacity-100 bg-ink/5 flex items-center justify-center">
                  {/* PDF Preview via Embed */}
                  <embed 
                    src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`} 
                    type="application/pdf" 
                    className="w-full h-full pointer-events-none" 
                  />
                  {/* Fallback overlay block to catch clicks */}
                  <div className="absolute inset-0 z-10 bg-transparent"></div>
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

      {/* Side-by-side layout for specific events */}
      {eventCerts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {eventCerts.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (standardCerts.length + i) * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex-1 flex flex-col justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.file}
                  alt={cert.name}
                  className="w-full h-auto aspect-square sm:aspect-[4/3] rounded-lg object-contain bg-ink/5 mb-4 opacity-90 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {cert.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  <ImageIcon className="h-3.5 w-3.5" />
                  View IMAGE
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
