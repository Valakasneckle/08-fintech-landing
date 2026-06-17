import { Analytics } from "@/components/sections/Analytics";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { PaymentWorkflow } from "@/components/sections/PaymentWorkflow";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/data/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Features | ${siteConfig.name}`,
  description:
    "Explore FinEdge features — payment management, invoice automation, cash flow insights, expense tracking, and financial analytics.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          badge="Features"
          title="Product features built for finance teams"
          description="Everything you need to manage payments, invoices, spending, and financial reporting in one platform."
        />
      </Section>
      <Features />
      <PaymentWorkflow />
      <Analytics />
      <CTA />
    </>
  );
}
