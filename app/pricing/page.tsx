import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description:
    "FinEdge pricing plans — Starter, Growth, and Business. Start free and scale with advanced analytics and team permissions.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          badge="Pricing"
          title="Transparent pricing for every stage"
          description="Choose the plan that fits your team. Upgrade anytime as your financial operations grow."
        />
      </Section>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
