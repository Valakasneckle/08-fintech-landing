"use client";

import { PricingCard } from "@/components/fintech/PricingCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { pricingPlans } from "@/data/pricing";
import { motion } from "framer-motion";
import { useState } from "react";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section id="pricing">
      <SectionHeader
        badge="Pricing"
        title="Plans that scale with your business"
        description="Start free, upgrade when you need advanced analytics, team permissions, and dedicated support."
      />
      <div className="mb-10 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!annual ? "text-primary" : "text-muted-foreground"}`}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual(!annual)}
          className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-accent-blue" : "bg-muted"}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-5" : ""}`}
          />
        </button>
        <span className={`text-sm font-medium ${annual ? "text-primary" : "text-muted-foreground"}`}>
          Annual <span className="text-accent-emerald">(save 20%)</span>
        </span>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <PricingCard plan={plan} annual={annual} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
