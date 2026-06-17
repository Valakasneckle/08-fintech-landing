"use client";

import { FinanceMetricCard } from "@/components/fintech/FinanceMetricCard";
import { TransactionCard } from "@/components/fintech/TransactionCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { dashboardMetrics, spendingCategories } from "@/data/metrics";
import { transactions } from "@/data/transactions";
import { formatCurrency } from "@/lib/format";
import { motion } from "framer-motion";

export function FinanceDashboard() {
  return (
    <Section id="dashboard" dark>
      <SectionHeader
        badge="Finance Dashboard"
        title="Every metric your finance team needs"
        description="Monitor balance, revenue, cash flow, and transactions in a unified dashboard built for financial decision-makers."
        dark
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <FinanceMetricCard key={metric.label} {...metric} dark />
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 font-semibold text-white">Recent Transactions</h3>
            <div className="space-y-3">
              {transactions.map((tx) => (
                <TransactionCard key={tx.id} transaction={tx} dark />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="font-semibold text-white">Spending Categories</h3>
          <p className="mt-1 text-sm text-slate-400">This quarter</p>
          <div className="mt-6 space-y-4">
            {spendingCategories.map((cat) => (
              <div key={cat.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">{cat.name}</span>
                  <span className="tabular-nums text-slate-400">
                    {formatCurrency(cat.amount, { compact: true })}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-accent-gold/30 bg-accent-gold/10 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
              Financial Health Score
            </p>
            <p className="mt-1 text-3xl font-bold text-white">92/100</p>
            <p className="mt-1 text-sm text-slate-400">Strong liquidity position</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
