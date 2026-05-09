"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { EASE } from "@/lib/constants";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          theme?: string;
          size?: string;
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Load and render Turnstile widget
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileRef.current) return;

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (!window.turnstile || !turnstileRef.current) return;
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setCaptchaToken(token),
        "error-callback": () => setCaptchaToken(null),
        theme: "light",
        size: "normal",
      });
    };

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (TURNSTILE_SITE_KEY && !captchaToken) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      token: captchaToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      formRef.current?.reset();
      setCaptchaToken(null);
      // Re-render turnstile
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY!,
          callback: (token: string) => setCaptchaToken(token),
          "error-callback": () => setCaptchaToken(null),
          theme: "light",
          size: "normal",
        });
      }
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonText = {
    idle: "Send Message",
    sending: "Sending...",
    sent: "Message Sent",
    error: "Failed — Try Again",
  };

  return (
    <section id="contact" data-theme="dark" className="py-24 md:py-32 px-6 md:px-10 bg-dark text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-8">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-10">
            Every great space
            <br />
            begins with a
            <br />
            conversation
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">Email</p>
              <a href="mailto:hello@mercerstudio.com" className="text-sm text-white/85 hover:text-white transition-colors">
                hello@mercerstudio.com
              </a>
            </div>
            <div>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">Phone</p>
              <a href="tel:+12128473920" className="text-sm text-white/85 hover:text-white transition-colors">
                +1 (212) 847-3920
              </a>
            </div>
            <div>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-1">Studio</p>
              <p className="text-sm text-white/85">142 Wooster Street<br />New York, NY 10012</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="space-y-8 pt-2"
        >
          <div>
            <label htmlFor="contact-name" className="block text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              disabled={status === "sending"}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              disabled={status === "sending"}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-[0.6rem] tracking-[0.2em] uppercase text-white/40 mb-3">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              required
              disabled={status === "sending"}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>

          {/* Cloudflare Turnstile captcha */}
          {TURNSTILE_SITE_KEY && (
            <div ref={turnstileRef} className="turnstile-container" />
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 px-8 py-3 border border-white/30 text-[0.7rem] tracking-[0.2em] uppercase text-white/80 hover:bg-white hover:text-[#2a2a2a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buttonText[status]}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
