"use client";

import { FinanceMetricCard } from "@/components/fintech/FinanceMetricCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { dashboardMetrics } from "@/data/metrics";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="mesh-bg relative px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success" className="mb-4">
              Built for finance teams & growing businesses
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Modern financial operations for{" "}
              <span className="text-gradient">growing businesses</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              FinEdge helps teams manage payments, invoices, spending, cash flow,
              analytics, and secure transactions from one modern fintech platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg">
                Start Free Trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/features" variant="secondary" size="lg">
                <Play className="h-4 w-4" aria-hidden="true" />
                View Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day trial on Growth plans.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {dashboardMetrics.slice(0, 4).map((metric) => (
              <FinanceMetricCard key={metric.label} {...metric} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
