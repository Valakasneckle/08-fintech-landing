"use client";

import { PaymentStep } from "@/components/fintech/PaymentStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { workflowSteps } from "@/data/workflow";
import { motion } from "framer-motion";

export function PaymentWorkflow() {
  return (
    <Section id="workflow">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <SectionHeader
          badge="Payment Workflow"
          title="From invoice to financial report in five steps"
          description="Automate the full payment lifecycle — create invoices, track status, reconcile transactions, and generate reports without switching tools."
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface-dark p-8"
        >
          {workflowSteps.map((step, i) => (
            <PaymentStep
              key={step.step}
              {...step}
              isLast={i === workflowSteps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
