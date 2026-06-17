"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SecurityFeature } from "@/components/fintech/SecurityFeature";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { securityFeatures } from "@/data/security";

export function Security() {
  return (
    <Section id="security" dark>
      <SectionHeader
        badge="Security & Trust"
        title="Financial operations built on trust"
        description="Encrypted workflows, role-based permissions, and audit-friendly logs — designed for teams that take financial security seriously."
        dark
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {securityFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <SecurityFeature {...feature} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/security" variant="outline">
          Explore security practices
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
