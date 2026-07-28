"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.length < 10) nextErrors.message = "Message is too short.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          to_name: "Deniz Efe Karacakaya",
          to_email: profile.email,
          reply_to: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formElement.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 sm:p-12"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-primary">
          Contact
        </span>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-3 max-w-md text-sm text-muted">
          Open to internships, collaborations, and interesting problems.
          Reach out directly or use the form.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary/50"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary/50"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="What are you building?"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-primary/50"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "submitting" ? (
                "Sending…"
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" /> Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="text-xs text-accent">
                Message sent. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400">
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
