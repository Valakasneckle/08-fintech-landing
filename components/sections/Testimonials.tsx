"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" dark>
      <SectionHeader
        badge="Testimonials"
        title="Trusted by finance teams"
        description="See how growing businesses use FinEdge to streamline payments, reporting, and financial operations."
        dark
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.blockquote
            key={item.author}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <Quote className="h-8 w-8 text-accent-cyan/50" aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">{item.author}</p>
              <p className="text-sm text-slate-400">
                {item.role}, {item.company}
              </p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}
