"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { analyticsCards } from "@/data/metrics";
import { motion } from "framer-motion";

export function Analytics() {
  return (
    <Section id="analytics">
      <SectionHeader
        badge="Financial Analytics"
        title="Insights that drive better decisions"
        description="Revenue trends, expense overviews, payment success rates, and cash flow — visualized for finance teams and leadership."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {analyticsCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-primary">{card.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{card.subtitle}</p>
            <div className="mt-4 flex items-end gap-1 h-16">
              {card.bars.map((height, j) => (
                <div
                  key={j}
                  className="flex-1 rounded-t bg-gradient-to-t from-accent-blue/20 to-accent-cyan"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
