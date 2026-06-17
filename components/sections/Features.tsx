"use client";

import { FeatureCard } from "@/components/fintech/FeatureCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { features } from "@/data/features";
import { motion } from "framer-motion";

export function Features() {
  return (
    <Section id="features" dark>
      <SectionHeader
        badge="Product Features"
        title="Everything your finance team needs"
        description="Payment management, invoice automation, cash flow insights, and secure transactions — unified in one platform."
        dark
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <FeatureCard {...feature} dark />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
