"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-emerald px-8 py-16 text-center sm:px-16"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to modernize your financial operations?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Join finance teams using FinEdge to manage payments, invoices, and analytics
          from one secure platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Request Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
